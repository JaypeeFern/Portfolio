import React from 'react'
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

export default function BackgroundParticles() {
    const starParticlesInit = React.useCallback(async (engine: Engine) => {
        await loadStarsPreset(engine);
    }, [])

    const particlesLoaded = React.useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    const options = {
        fullScreen: { enable: false },
        background: {
            color: ""
          },
        preset: "stars",
    };

    return (
        <Particles
            id="tsparticles"
            init={starParticlesInit}
            loaded={particlesLoaded}
            style={{ position: 'fixed' }}
            options={options}
        />
    );
}