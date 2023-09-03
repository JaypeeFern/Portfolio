import React from 'react'
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";
import options from  './configs/particleConfig'

export default function BackgroundParticles() {
    const starParticlesInit = React.useCallback(async (engine: Engine) => {
        await loadStarsPreset(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={starParticlesInit}
            style={{ position: 'fixed' }}
            options={options}
        />
    );
}