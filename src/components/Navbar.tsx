'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon, MonitorSmartphone } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        setMounted(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const navItems = [
        { name: 'home', path: '/' },
        { name: 'projects', path: '#projects' },
        { name: 'blogs', path: '#blogs' },
        { name: 'resume', path: '#resume' },
    ];

    return (
        <nav className="fixed top-0 w-full backdrop-blur-xl bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200/50 dark:border-white/5 z-50 transition-all duration-300">
            <div className="max-w-4xl mx-auto px-8 py-4 flex justify-between items-center">
                <div className="flex gap-8 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            onClick={() => setActiveSection(item.name)}
                            className={`cursor-pointer transition-colors duration-200 ${activeSection === item.name
                                ? 'text-neutral-900 dark:text-white'
                                : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="flex gap-2 items-center">
                    {mounted && (
                        <>
                            <button
                                onClick={() => setTheme('light')}
                                className={`w-9 h-9 rounded-lg border border-neutral-200 dark:border-white/10 flex items-center justify-center transition-all duration-200 ${theme === 'light' ? 'bg-white dark:bg-white/5' : 'bg-transparent'
                                    }`}
                            >
                                <Sun size={18} className={theme === 'light' ? 'text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-neutral-400'} />
                            </button>
                            <button
                                onClick={() => setTheme('system')}
                                className={`w-9 h-9 rounded-lg border border-neutral-200 dark:border-white/10 flex items-center justify-center transition-all duration-200 ${theme === 'system' ? 'bg-white dark:bg-white/5' : 'bg-transparent'
                                    }`}
                            >
                                <MonitorSmartphone size={18} className={theme === 'system' ? 'text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-neutral-400'} />
                            </button>
                            <button
                                onClick={() => setTheme('dark')}
                                className={`w-9 h-9 rounded-lg border border-neutral-200 dark:border-white/10 flex items-center justify-center transition-all duration-200 ${theme === 'dark' ? 'bg-white dark:bg-white/5' : 'bg-transparent'
                                    }`}
                            >
                                <Moon size={18} className={theme === 'dark' ? 'text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-neutral-400'} />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
