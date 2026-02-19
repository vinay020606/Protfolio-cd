import React from 'react';
import { skills } from '../data/portfolio';
import { FadeIn, FadeInStagger } from './FadeIn';

export default function Skills() {
    return (
        <section className="max-w-4xl mx-auto py-12 px-8">
            <FadeIn>
                <h2 className="text-2xl font-normal mb-6 font-serif text-neutral-900 dark:text-white">
                    Skills <span className="text-neutral-500 dark:text-neutral-400">#</span>
                </h2>
            </FadeIn>

            <FadeInStagger faster>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                        <FadeIn key={idx}>
                            <div
                                className="px-4 py-1.5 bg-neutral-50/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/5 rounded-full text-sm text-neutral-600 dark:text-neutral-300 transition-all duration-300 flex items-center gap-2 cursor-default hover:border-neutral-300 dark:hover:border-white/20 hover:scale-[1.02]"
                            >
                                <span className="text-xs opacity-50 grayscale">{skill.icon}</span>
                                <span className="font-mono text-xs tracking-tight">{skill.name}</span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </FadeInStagger>
        </section>
    );
}
