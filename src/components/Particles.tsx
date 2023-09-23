import React from 'react'
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { useTheme } from '../contexts/ThemeProvider';
import options from './configs/particleConfig'

// Problem: UI not updating but the value in the config was changed 
// -------------------- Solution--------------------
/*
  Using a unique 'key' prop forces React to treat
  the component as a new instance and re-render it
  when the 'options' prop changes, ensuring updates
  are reflected in the UI.
*/

export default function BackgroundParticles() {
    const { theme } = useTheme()
    const starParticlesInit = React.useCallback(async (engine: Engine) => {
        await loadStarsPreset(engine);
    }, []);

    // Define the theme-specific particle colors
    const lightThemeColor = '#000000'; // Black for light theme
    const darkThemeColor = '#ffffff'; // White for dark theme

    // Use state to track the current particle color
    const [particleColor, setParticleColor] = React.useState<string>('');

    // Use useEffect to update the particle color when the theme changes
    React.useEffect(() => {
        if (theme === 'light') {
            setParticleColor(lightThemeColor);
        } else {
            setParticleColor(darkThemeColor);
        }
    }, [theme]);

    options.particles.color.value = particleColor;

    return (
        <Particles
            key={particleColor}
            id="tsparticles"
            init={starParticlesInit}
            style={{ position: 'fixed' }}
            options={options}
        />
    );
}