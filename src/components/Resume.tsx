import React from 'react';
import { resume } from '../data/portfolio';

export default function Resume() {
    return (
        <section id="resume" className="max-w-4xl mx-auto py-12 px-8">
            <h2 className="text-2xl font-normal mb-8 font-serif text-neutral-900 dark:text-white">
                Resume <span className="text-neutral-500 dark:text-neutral-400">#</span>
            </h2>

            <div className="space-y-12">
                <div>
                    <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-6 font-serif">
                        Experience
                    </h3>
                    <div className="border-l border-dashed border-neutral-200 dark:border-white/10 ml-1 pl-8 space-y-8">
                        {resume.experience.map((exp, idx) => (
                            <div key={idx} className="relative group">
                                <span className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-200 dark:bg-neutral-800 ring-4 ring-white dark:ring-neutral-950 group-hover:bg-blue-500 transition-colors duration-300"></span>
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                                    <h4 className="text-base font-medium text-neutral-900 dark:text-white">{exp.role}</h4>
                                    <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">{exp.duration}</span>
                                </div>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2 font-medium">{exp.company}</p>
                                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 font-light max-w-2xl">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-6 font-serif">
                        Education
                    </h3>
                    <div className="border-l border-dashed border-neutral-200 dark:border-white/10 ml-1 pl-8 space-y-8">
                        {resume.education.map((edu, idx) => (
                            <div key={idx} className="relative group">
                                <span className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-200 dark:bg-neutral-800 ring-4 ring-white dark:ring-neutral-950 group-hover:bg-blue-500 transition-colors duration-300"></span>
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                                    <h4 className="text-base font-medium text-neutral-900 dark:text-white">{edu.degree}</h4>
                                    <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">{edu.year}</span>
                                </div>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400">{edu.institution}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-dashed border-neutral-200 dark:border-white/10">
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors group"
                >
                    <span className="border-b border-neutral-300 dark:border-neutral-600 group-hover:border-neutral-900 dark:group-hover:border-white transition-colors">Download Résumé</span>
                    <span className="text-xs">↗</span>
                </a>
            </div>
        </section>
    );
}
