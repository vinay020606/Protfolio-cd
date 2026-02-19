'use client';

import React from 'react';
import { FileText, Linkedin, Github, Mail } from 'lucide-react';
import { FadeIn } from './FadeIn';
import Avatar3D from './Avatar3D';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="max-w-4xl mx-auto pt-32 pb-16 px-8">
            <FadeIn>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-40 h-40 md:w-52 md:h-52 flex-shrink-0 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
                        <Avatar3D />
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="relative">
                                <h1 className="text-3xl font-semibold font-serif text-neutral-900 dark:text-white relative z-10">
                                    S Vinay
                                </h1>
                                {/* Underline Container */}
                                <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-neutral-200 dark:bg-neutral-800 overflow-hidden rounded-full">
                                    {/* Moving Spark */}
                                    <motion.div
                                        className="w-[60%] h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "200%" }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 2,
                                            ease: "easeInOut",
                                            repeatDelay: 1
                                        }}
                                    />
                                </div>
                            </div>
                            <span className="text-blue-500 text-xl">✓</span>
                        </div>

                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                            | 20, Bangalore IND
                        </p>

                        <p className="text-base font-medium text-neutral-900 dark:text-white mb-6">
                            Developer
                        </p>

                        <p className="text-base leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-xl mb-8 font-mono">
                            A Backend & Cloud Engineer architecting scalable solutions today, exploring advanced DevOps and system design patterns tomorrow.
                        </p>

                        <div className="flex gap-4 items-center">
                            {[
                                { icon: FileText, href: '#resume' },
                                { icon: Linkedin, href: '#' },
                                { icon: Github, href: '#' },
                                { icon: Mail, href: 'mailto:email@example.com' },
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    className="w-10 h-10 rounded-lg border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-900 dark:text-white bg-white dark:bg-white/5 hover:bg-neutral-50 dark:hover:bg-white/10 transform hover:scale-110 transition-all duration-200"
                                >
                                    <item.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
