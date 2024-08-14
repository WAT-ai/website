import React, { useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  color: string;
  radius: number;
  speed: number;
  directionAngle: number;
  vector: { x: number; y: number };
  update: () => void;
  draw: () => void;
  border: () => void;
}

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    let w: number,
      h: number,
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D | null;
    let particles: Particle[] = [];

    const options = {
      particleColor: "rgba(200,200,200)",
      lineColor: "rgba(150,150,150)",
      particleAmount: 120,
      defaultRadius: 1,
      variantRadius: 1,
      defaultSpeed: .5,
      variantSpeed: .5,
      linkRadius: 320,
    };

    const rgb = options.lineColor.match(/\d+/g) as string[];

    const init = () => {
      canvas = document.getElementById("canvas") as HTMLCanvasElement;
      ctx = canvas.getContext("2d");
      resizeReset();
      initialiseElements();
      startAnimation();
    };

    const resizeReset = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    const initialiseElements = () => {
      particles = [];
      for (let i = 0; i < options.particleAmount; i++) {
        particles.push(new Particle());
      }
    };

    const startAnimation = () => {
      requestAnimationFrame(animationLoop);
    };

    const animationLoop = () => {
      if (ctx) {
        ctx.clearRect(0, 0, w, h);
        drawScene();
        requestAnimationFrame(animationLoop);
      }
    };

    const drawScene = () => {
      drawLine();
      drawParticle();
    };

    const drawParticle = () => {
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
    };

    const drawLine = () => {
      particles.forEach((particle) => {
        linkPoints(particle, particles);
      });
    };

    const linkPoints = (point: Particle, hubs: Particle[]) => {
      hubs.forEach((hub) => {
        const distance = checkDistance(point.x, point.y, hub.x, hub.y);
        const opacity = 1 - distance / options.linkRadius;
        if (opacity > 0 && ctx) {
          ctx.lineWidth = 0.5;
          ctx.strokeStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${opacity})`;
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(hub.x, hub.y);
          ctx.closePath();
          ctx.stroke();
        }
      });
    };

    const checkDistance = (
      x1: number,
      y1: number,
      x2: number,
      y2: number
    ): number => {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    class Particle implements Particle {
      x: number;
      y: number;
      color: string;
      radius: number;
      speed: number;
      directionAngle: number;
      vector: { x: number; y: number };

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.color = options.particleColor;
        this.radius =
          options.defaultRadius + Math.random() * options.variantRadius;
        this.speed =
          options.defaultSpeed + Math.random() * options.variantSpeed;
        this.directionAngle = Math.floor(Math.random() * 360);
        this.vector = {
          x: Math.cos(this.directionAngle) * this.speed,
          y: Math.sin(this.directionAngle) * this.speed,
        };
      }

      update() {
        this.border();
        this.x += this.vector.x;
        this.y += this.vector.y;
      }

      border() {
        if (this.x >= w || this.x <= 0) {
          this.vector.x *= -1;
        }
        if (this.y >= h || this.y <= 0) {
          this.vector.y *= -1;
        }
        if (this.x > w) this.x = w;
        if (this.y > h) this.y = h;
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
      }

      draw() {
        if (ctx) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fillStyle = this.color;
          ctx.fill();
        }
      }
    }

    window.addEventListener("resize", resizeReset);
    init();

    return () => {
      window.removeEventListener("resize", resizeReset);
    };
  }, []);

  return (
    <canvas
      id="canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ParticleBackground;
