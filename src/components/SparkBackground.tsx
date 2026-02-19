'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    baseAlpha: number;
    originalX: number;
    originalY: number;
}

export default function SparkBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();
    const [mouse, setMouse] = useState({ x: -1000, y: -1000 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            // Reduced count for clean look
            const particleCount = Math.floor(window.innerWidth * 0.05);

            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particles.push({
                    x,
                    y,
                    originalX: x,
                    originalY: y,
                    vx: (Math.random() - 0.5) * 0.2,
                    vy: (Math.random() - 0.5) * 0.2,
                    size: Math.random() * 1.5 + 0.5,
                    baseAlpha: Math.random() * 0.4 + 0.1,
                });
            }
        };

        const drawConnection = (x1: number, y1: number, x2: number, y2: number, opacity: number, isDark: boolean) => {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);

            // Dynamic Spark Color
            ctx.strokeStyle = isDark
                ? `rgba(96, 165, 250, ${opacity})` // Blue-400
                : `rgba(37, 99, 235, ${opacity})`; // Blue-600

            ctx.lineWidth = 1;

            // Add glow to the connection
            if (opacity > 0.4) {
                ctx.shadowBlur = 10;
                ctx.shadowColor = isDark ? '#60a5fa' : '#2563eb';
            } else {
                ctx.shadowBlur = 0;
            }

            ctx.stroke();
            ctx.shadowBlur = 0; // Reset
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const isDark = theme === 'dark';

            // Draw Mouse Aura (Gradient)
            if (mouse.x > 0) {
                // Reduced cursor aura size from 300 to 150
                const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 80);
                gradient.addColorStop(0, isDark ? 'rgba(59, 130, 246, 0.12)' : 'rgba(37, 99, 235, 0.06)');
                gradient.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            particles.forEach((p) => {
                // Move logic
                p.x += p.vx;
                p.y += p.vy;

                // Bounce
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Mouse Interaction Calculation
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Default styles
                let alpha = p.baseAlpha;
                let size = p.size;
                let color = isDark ? '255, 255, 255' : '15, 23, 42';

                // "Magnetic" Pull & Spark Effect
                if (dist < 120) {
                    // Pull particle slightly towards mouse for organic feel
                    p.x += dx * 0.02;
                    p.y += dy * 0.02;

                    // Increase brightness and size
                    alpha = Math.min(1, alpha + 0.5);
                    size = size * 1.5;

                    // Connection line
                    const opacity = (1 - dist / 120);
                    drawConnection(mouse.x, mouse.y, p.x, p.y, opacity, isDark);

                    // Spark Jitter (makes it look energetic)
                    if (dist < 60) {
                        p.x += (Math.random() - 0.5) * 2;
                        p.y += (Math.random() - 0.5) * 2;

                        // Particle turns blue
                        color = isDark ? '96, 165, 250' : '37, 99, 235';
                    }
                }

                // Draw Particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color}, ${alpha})`;

                // Glow if close
                if (dist < 100) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = `rgba(${color}, 1)`;
                }

                ctx.fill();
                ctx.shadowBlur = 0;
            });

            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        render();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme, mouse]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-transparent"
        />
    );
}
