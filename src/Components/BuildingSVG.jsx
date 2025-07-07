import React from "react";
import { motion } from "framer-motion";

const BuildingSVG = ({ progress = 100 }) => {
    // --- Define Colors based on the image ---
    // Note: outlineStaticColor and windowColor are currently dark,
    // if you want them to be truly transparent (i.e., not visible when transparent background),
    // you might need to adjust their colors or remove them if they're acting as a "fill" you don't want.
    const outlineStaticColor = "white"; // Darker almost black blue for static background
    const outlineAnimatedColor = "#3B82F6"; // Brighter blue for animated outline
    const circuitLineColor = "#00ff00"; // Golden/Amber for circuit lines
    const windowColor = "purple"; // Dark color for internal windows

    const glowColorOutline = outlineAnimatedColor;
    const glowColorCircuit = circuitLineColor;

    // Helper to get total length of a path string
    const getPathLength = (pathD) => {
        try {
            if (typeof document !== 'undefined') {
                const tempPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                tempPath.setAttribute("d", pathD);
                return tempPath.getTotalLength();
            }
        } catch (e) {
            console.warn("Could not get path length, returning default. Ensure DOM is available or pre-calculate lengths.", e);
        }
        return 100; // Fallback default length if DOM is not available
    };

    // Calculate dash offset for animation
    const calculateDashOffset = (length, prog) => {
        return length - (prog / 100) * length;
    };

    // --- Building Path Definitions (MORE COMPLEX PLACEHOLDERS) ---
    const building1Path = "M100 250 L100 80 L150 40 L200 80 L200 250 Z";
    const building2Path = "M40 250 L40 160 L80 130 L120 160 L120 250 Z";
    const building3Path = "M180 250 L180 150 L220 120 L260 150 L260 250 Z";
    const building4Path = "M0 250 L0 200 L30 180 L60 200 L60 250 Z";


    // --- Internal Window/Square-like Shapes ---
    const windowPaths = [
        "M110 230 H130 V210 H110 Z", // Building 1 bottom
        "M150 230 H170 V210 H150 Z", // Building 1 bottom right
        "M110 190 H130 V170 H110 Z", // Building 1 mid
        "M150 190 H170 V170 H150 Z", // Building 1 mid right
        "M130 140 H150 V120 H130 Z", // Building 1 top-ish

        "M50 230 H70 V210 H50 Z", // Building 2 bottom
        "M90 230 H110 V210 H90 Z", // Building 2 bottom right

        "M190 230 H210 V210 H190 Z", // Building 3 bottom
        "M230 230 H250 V210 H230 Z", // Building 3 bottom right
    ];

    // --- Circuit Line Path Definitions (MORE NUMEROUS & INTERCONNECTED PLACEHOLDERS) ---
    const circuitPaths = [
        // Paths within Building 1
        "M140 240 L140 180 C130 170, 150 170, 140 160 S130 140, 140 130 L140 90",
        "M110 220 L130 200 C140 190, 160 190, 170 200 L190 220",
        "M120 160 L130 150 L140 160 L150 150 L160 160",
        "M170 240 L170 190 C180 180, 190 180, 190 170 S180 160, 170 150",

        // Paths connecting Building 1 and 2
        "M100 200 C90 190, 80 180, 70 170 L60 160",
        "M120 200 C110 210, 90 220, 70 230",
        "M80 150 L90 140 L100 150 L110 140",

        // Paths within Building 2
        "M70 240 L70 200 C60 190, 80 190, 70 180 S60 170, 70 160",
        "M50 220 L70 210 L90 220 L110 210",

        // Paths connecting Building 1 and 3
        "M180 200 C190 190, 200 180, 210 170 L220 160",
        "M200 200 C210 210, 230 220, 250 230",

        // Paths within Building 3
        "M210 240 L210 200 C200 190, 220 190, 210 180 S200 170, 210 160",
        "M190 220 L210 210 L230 220 L250 210",

        // Paths connecting Building 2 and 4
        "M40 210 L20 200 L10 210 L0 220",
        "M50 180 C40 170, 30 170, 20 180 L10 190",


    ];

    // --- "Node" (Circle) Definitions ---
    const nodes = [
        { cx: 140, cy: 90, delay: 0.6 },
        { cx: 190, cy: 220, delay: 0.8 },
        { cx: 70, cy: 160, delay: 1.0 },
        { cx: 210, cy: 160, delay: 1.2 },
        { cx: 60, cy: 160, delay: 1.4 },
        { cx: 70, cy: 230, delay: 1.6 },
        { cx: 220, cy: 160, delay: 1.8 },
        { cx: 250, cy: 230, delay: 2.0 },
        { cx: 280, cy: 70, delay: 2.2 },
        { cx: 290, cy: 140, delay: 2.4 },
        { cx: 20, cy: 110, delay: 2.6 },
        { cx: 0, cy: 220, delay: 2.8 },
        { cx: 10, cy: 190, delay: 3.0 },
        { cx: 140, cy: 130, delay: 0.7 },
        { cx: 170, cy: 150, delay: 0.9 },
        { cx: 120, cy: 160, delay: 1.1 },
        { cx: 230, cy: 220, delay: 1.3 },
    ];

    return (
        <svg
            width="200"
            height="200"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-2"
        // REMOVED: style={{ backgroundColor: "black" }}
        // SVG backgrounds are transparent by default.
        // If you are embedding this in an HTML page, the background color
        // of the parent element (e.g., body, div) will show through.
        >
            {/* --- Static Outlines (Lower Opacity) for all buildings --- */}
            {[building1Path, building2Path, building3Path, building4Path].map((d, index) => (
                <path
                    key={`building-static-${index}`}
                    d={d}
                    stroke={outlineStaticColor}
                    strokeWidth="3"
                    opacity="0.2"
                />
            ))}

            {/* --- Internal Window Shapes (Static, Darker) --- */}
            {/* These will now appear as dark shapes against whatever background the SVG is placed on. */}
            {windowPaths.map((d, index) => (
                <path
                    key={`window-${index}`}
                    d={d}
                    fill={windowColor}
                    opacity="0.8"
                />
            ))}

            {/* --- Animated Building Outlines --- */}
            {[building1Path, building2Path, building3Path, building4Path].map((d, index) => {
                const length = getPathLength(d);
                return (
                    <motion.path
                        key={`building-animated-${index}`}
                        d={d}
                        stroke={outlineAnimatedColor}
                        strokeWidth="3"
                        fill="transparent"
                        strokeDasharray={length}
                        strokeDashoffset={calculateDashOffset(length, progress)}
                        style={{ filter: `drop-shadow(0 0 10px ${glowColorOutline})` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                );
            })}

            {/* --- Animated Circuit Lines --- */}
            {circuitPaths.map((d, index) => {
                const length = getPathLength(d);
                const circuitDelay = index * 0.05;
                const circuitAnimationProgress = Math.max(0, Math.min(100, progress - (circuitDelay * 100)));

                return (
                    <motion.path
                        key={`circuit-${index}`}
                        d={d}
                        stroke={circuitLineColor}
                        strokeWidth="2"
                        fill="transparent"
                        strokeDasharray={length}
                        strokeDashoffset={calculateDashOffset(length, circuitAnimationProgress)}
                        style={{ filter: `drop-shadow(0 0 5px ${glowColorCircuit})` }}
                        transition={{ duration: 1.0, ease: "easeOut", delay: circuitDelay }}
                    />
                );
            })}

            {/* --- Animated Circuit Nodes (Circles) --- */}
            {nodes.map((node, index) => (
                <motion.circle
                    key={`node-${index}`}
                    cx={node.cx}
                    cy={node.cy}
                    r="3"
                    fill={circuitLineColor}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: node.delay + (progress / 100) * 0.5,
                        duration: 0.2,
                        type: "spring",
                        stiffness: 200,
                        damping: 10
                    }}
                    style={{ filter: `drop-shadow(0 0 5px ${glowColorCircuit})` }}
                />
            ))}
        </svg>
    );
};

export default BuildingSVG;