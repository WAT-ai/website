import React, { useEffect } from "react";
import { PERFORMANCE_CONFIG } from "../utils/performance";

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
      particleColor: "rgba(150,150,150)",
      lineColor: "rgba(100,100,120)",
      particleAmount: 0, // This will be dynamically set
      defaultRadius: 1.5,
      variantRadius: 1.5,
      defaultSpeed: 0.1, // Reduced speed for better performance
      variantSpeed: 0.1,
      linkRadius: PERFORMANCE_CONFIG.PARTICLE_LINK_RADIUS, // Use config value
    };

    const rgb = options.lineColor.match(/\d+/g) as string[];

    const init = () => {
      canvas = document.getElementById("canvas") as HTMLCanvasElement;
      ctx = canvas.getContext("2d");
      resizeReset();
      
      // Delay animation start to reduce initial load lag
      setTimeout(() => {
        startAnimation();
      }, 100);
    };

    const resizeReset = () => {
      const oldW = w;
      const oldH = h;
      
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight * 0.5; // Adjust height based on a percentage of viewport height
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      // Scale existing particles to new dimensions
      if (particles.length > 0 && oldW && oldH) {
        const scaleX = w / oldW;
        const scaleY = h / oldH;
        
        particles.forEach(particle => {
          particle.x *= scaleX;
          particle.y *= scaleY;
          
          // Keep particles within bounds
          particle.x = Math.min(Math.max(particle.x, 0), w);
          particle.y = Math.min(Math.max(particle.y, 0), h);
        });
      }

      // Optimize particle count based on device capability
      const isMobile = window.innerWidth < 768;
      const maxParticles = isMobile 
        ? PERFORMANCE_CONFIG.PARTICLE_COUNT_MOBILE 
        : PERFORMANCE_CONFIG.PARTICLE_COUNT_DESKTOP;
      const newParticleAmount = Math.min(Math.floor(w / 25), maxParticles);
      
      // Handle particle count changes without losing existing particles
      if (particles.length === 0) {
        // First initialization
        options.particleAmount = newParticleAmount;
        initialiseElements();
      } else if (newParticleAmount > particles.length) {
        // Add new particles to existing array
        const particlesToAdd = newParticleAmount - particles.length;
        for (let i = 0; i < particlesToAdd; i++) {
          particles.push(new Particle());
        }
        options.particleAmount = newParticleAmount;
      } else if (newParticleAmount < particles.length) {
        // Remove excess particles
        particles = particles.slice(0, newParticleAmount);
        options.particleAmount = newParticleAmount;
      }
      // If newParticleAmount === particles.length, do nothing
    };

    const initialiseElements = () => {
      particles = [];
      for (let i = 0; i < options.particleAmount; i++) {
        particles.push(new Particle());
      }
    };

    let animationId: number;
    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const startAnimation = () => {
      animationId = requestAnimationFrame(animationLoop);
    };

    const animationLoop = (currentTime: number) => {
      if (currentTime - lastTime >= frameInterval) {
        if (ctx) {
          ctx.clearRect(0, 0, w, h);
          drawScene();
        }
        lastTime = currentTime;
      }
      animationId = requestAnimationFrame(animationLoop);
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
      // Optimize by only checking nearby particles
      hubs.forEach((hub) => {
        if (point === hub) return; // Skip self
        
        const dx = point.x - hub.x;
        const dy = point.y - hub.y;
        
        // Quick distance check before expensive sqrt
        const distanceSquared = dx * dx + dy * dy;
        const linkRadiusSquared = options.linkRadius * options.linkRadius;
        
        if (distanceSquared < linkRadiusSquared) {
          const distance = Math.sqrt(distanceSquared);
          const opacity = (1 - distance / options.linkRadius) * 0.6; // Reduced opacity
          
          if (ctx) {
            ctx.lineWidth = 0.3; // Thinner lines for better performance
            ctx.strokeStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${opacity})`;
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(hub.x, hub.y);
            ctx.stroke();
          }
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
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    window.addEventListener("resize", resizeReset);
    init();

    return () => {
      window.removeEventListener("resize", resizeReset);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      id="canvas"
      style={{
        position: "absolute",
        top: "150px",
        left: "50%",
        transform: "translateX(-50%)",
        maxWidth: "100%",
        zIndex: -1,
        display: "block",
      }}
    />
  );
};

export default ParticleBackground;
