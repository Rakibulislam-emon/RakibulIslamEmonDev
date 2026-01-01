"use client";

import { useEffect } from "react";

interface OscillatorOptions {
  phase?: number;
  offset?: number;
  frequency?: number;
  amplitude?: number;
}

class Oscillator {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;

  constructor(options: OscillatorOptions) {
    this.phase = options.phase || 0;
    this.offset = options.offset || 0;
    this.frequency = options.frequency || 0.001;
    this.amplitude = options.amplitude || 1;
  }

  update() {
    this.phase += this.frequency;
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

class CursorNode implements Node {
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;
}

interface LineOptions {
  spring: number;
}

const E = {
  friction: 0.5,
  trails: 20,
  size: 50,
  dampening: 0.25,
  tension: 0.98,
};

const pos = { x: 0, y: 0 };

class Line {
  spring: number;
  friction: number;
  nodes: CursorNode[];

  constructor(options: LineOptions) {
    this.spring = options.spring + 0.1 * Math.random() - 0.02;
    this.friction = E.friction + 0.01 * Math.random() - 0.002;
    this.nodes = [];
    for (let i = 0; i < E.size; i++) {
      const t = new CursorNode();
      t.x = pos.x;
      t.y = pos.y;
      this.nodes.push(t);
    }
  }

  update() {
    let spring = this.spring;
    let t = this.nodes[0];

    t.vx += (pos.x - t.x) * spring;
    t.vy += (pos.y - t.y) * spring;

    for (let i = 0, a = this.nodes.length; i < a; i++) {
      t = this.nodes[i];
      if (i > 0) {
        const prev = this.nodes[i - 1];
        t.vx += (prev.x - t.x) * spring;
        t.vy += (prev.y - t.y) * spring;
        t.vx += prev.vx * E.dampening;
        t.vy += prev.vy * E.dampening;
      }
      t.vx *= this.friction;
      t.vy *= this.friction;
      t.x += t.vx;
      t.y += t.vy;
      spring *= E.tension;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    let n = this.nodes[0].x;
    let i = this.nodes[0].y;
    ctx.beginPath();
    ctx.moveTo(n, i);

    let a = 1;
    for (const o = this.nodes.length - 2; a < o; a++) {
      const current = this.nodes[a];
      const next = this.nodes[a + 1];
      n = 0.5 * (current.x + next.x);
      i = 0.5 * (current.y + next.y);
      ctx.quadraticCurveTo(current.x, current.y, n, i);
    }

    const last = this.nodes[a];
    const nextLast = this.nodes[a + 1];
    ctx.quadraticCurveTo(last.x, last.y, nextLast.x, nextLast.y);
    ctx.stroke();
    ctx.closePath();
  }
}

const useCanvasCursor = () => {
  useEffect(() => {
    let ctx:
      | (CanvasRenderingContext2D & { running?: boolean; frame?: number })
      | null = null;
    let oscillator: Oscillator;
    let lines: Line[] = [];

    const onMousemove = (e: MouseEvent | TouchEvent) => {
      const setupLines = () => {
        lines = [];
        for (let i = 0; i < E.trails; i++) {
          lines.push(new Line({ spring: 0.4 + (i / E.trails) * 0.025 }));
        }
      };

      const move = (event: MouseEvent | TouchEvent) => {
        if ("touches" in event) {
          pos.x = event.touches[0].pageX;
          pos.y = event.touches[0].pageY;
        } else {
          pos.x = event.clientX;
          pos.y = event.clientY;
        }
      };

      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("touchstart", onMousemove);
      document.addEventListener("mousemove", move);
      document.addEventListener("touchmove", move);

      move(e);
      setupLines();
      render();
    };

    const render = () => {
      if (ctx && ctx.running) {
        ctx.globalCompositeOperation = "source-over";
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalCompositeOperation = "lighter";
        ctx.strokeStyle = `hsla(${Math.round(
          oscillator.update()
        )}, 50%, 50%, 0.2)`;
        ctx.lineWidth = 1;

        for (let i = 0; i < E.trails; i++) {
          const line = lines[i];
          line.update();
          line.draw(ctx);
        }

        if (ctx.frame !== undefined) ctx.frame++;
        window.requestAnimationFrame(render);
      }
    };

    const resizeCanvas = () => {
      if (ctx) {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
      }
    };

    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (canvas) {
      ctx = canvas.getContext("2d") as any;
      if (ctx) {
        ctx.running = true;
        ctx.frame = 1;
        oscillator = new Oscillator({
          phase: Math.random() * 2 * Math.PI,
          amplitude: 85,
          frequency: 0.0015,
          offset: 285,
        });

        document.addEventListener("mousemove", onMousemove);
        document.addEventListener("touchstart", onMousemove);
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
      }
    }

    return () => {
      if (ctx) ctx.running = false;
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("touchstart", onMousemove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
};

export default useCanvasCursor;
