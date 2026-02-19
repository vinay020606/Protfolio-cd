'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import { FadeIn, FadeInStagger } from './FadeIn';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

function ProjectCard({ project }: { project: typeof projects[0] }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="group relative rounded-lg border border-neutral-100 dark:border-white/5 bg-neutral-50/30 dark:bg-white/5 px-5 py-5 transition-all hover:border-neutral-200 dark:hover:border-white/10"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.08), 
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-medium flex items-center gap-2 text-neutral-900 dark:text-white font-serif">
                        {project.name}
                    </h3>
                    <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
                </div>

                <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 mb-5 font-light">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, techIdx) => (
                        <span
                            key={techIdx}
                            className="px-2 py-0.5 bg-white dark:bg-white/5 border border-neutral-100 dark:border-white/5 rounded text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="max-w-4xl mx-auto py-12 px-8">
            <FadeIn>
                <h2 className="text-2xl font-normal mb-8 font-serif text-neutral-900 dark:text-white">
                    Projects <span className="text-neutral-500 dark:text-neutral-400">#</span>
                </h2>
            </FadeIn>

            <FadeInStagger>
                <div className="flex flex-col gap-4">
                    {projects.map((project, idx) => (
                        <FadeIn key={idx}>
                            <ProjectCard project={project} />
                        </FadeIn>
                    ))}
                </div>
            </FadeInStagger>
        </section>
    );
}
