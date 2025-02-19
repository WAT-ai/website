import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

const StarryBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadStarsPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        preset: "stars",
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          size: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              size_min: 0.1,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
          line_linked: {
            enable: false
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
              sync: false
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 200,
              size: 2,
              duration: 0.4,
              opacity: 1,
              speed: 3
            }
          }
        },
        retina_detect: true
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none"
      }}
    />
  );
};

export default StarryBackground; 