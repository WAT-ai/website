// ParticleBackground.tsx - Animated particle background for hero sections
// -----------------------------------------------------------------------
// This component renders a visually appealing animated background for hero sections.
// Edit this file to customize animation, colors, or density.

// Animated particle background for visual effect.
// Edit options for color, speed, or density. Used on landing/team pages.
import React, { useEffect, useRef } from "react";
import { PERFORMANCE_CONFIG } from "../utils/performance";

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let w: number,
      h: number,
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D | null;
    let particles: Particle[] = [];

    const options = {
      particleColor: "rgba(150, 150, 150, 0.3)",
      lineColor: "rgba(255, 206, 26, 0.4)",
      particleAmount: 0, // Dynamically calculated based on screen size
      defaultRadius: 5,
      variantRadius: 3,
      defaultSpeed: 0.2,
      variantSpeed: 0.2,
      linkRadius: PERFORMANCE_CONFIG.PARTICLE_LINK_RADIUS,
    };

    const rgb = options.lineColor.match(/\d+/g) as string[];

    /**
     * Initialize canvas and start particle animation
     * Uses delayed start to avoid blocking initial page render
     */
    const init = () => {
      canvas = canvasRef.current!;
      if (!canvas) {
        return;
      }
      
      ctx = canvas.getContext("2d");
      if (!ctx) {
        return;
      }
      
      resizeReset();
      
      // Start animation immediately
      startAnimation();
    };

    /**
     * Handle canvas resize and particle redistribution
     * Maintains particle density while preventing performance degradation
     * Scales existing particles to new dimensions to avoid jarring transitions
     */
    const resizeReset = () => {
      const oldW = w;
      const oldH = h;
      
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight; // Cover full document height
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

    class Particle {
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
      ref={canvasRef}
      style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        zIndex: 0,
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticleBackground;
