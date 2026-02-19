import React from 'react';
import { blogs } from '../data/portfolio';
import { FadeIn, FadeInStagger } from './FadeIn';

export default function Blogs() {
    return (
        <section id="blogs" className="max-w-4xl mx-auto py-12 px-8 pb-16">
            <FadeIn>
                <h2 className="text-2xl font-normal mb-8 font-serif text-neutral-900 dark:text-white">
                    Blogs <span className="text-neutral-500 dark:text-neutral-400">#</span>
                </h2>
            </FadeIn>

            <FadeInStagger>
                <div className="flex flex-col gap-3">
                    {blogs.map((blog, idx) => (
                        <FadeIn key={idx}>
                            <a
                                href={blog.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between p-4 rounded-lg border border-transparent hover:border-neutral-100 dark:hover:border-white/5 hover:bg-neutral-50 dark:hover:bg-white/5 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-neutral-400 dark:text-neutral-600 font-mono text-xs">0{idx + 1}</span>
                                    <h3 className="text-base font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                                        {blog.title}
                                    </h3>
                                </div>

                                <span className="text-neutral-300 dark:text-neutral-700 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300">
                                    ↗
                                </span>
                            </a>
                        </FadeIn>
                    ))}
                </div>
            </FadeInStagger>

            <FadeIn>
                <a
                    href="/blogs"
                    className="inline-block mt-8 px-6 py-3 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-lg text-neutral-900 dark:text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                    view all blogs
                </a>
            </FadeIn>
        </section>
    );
}
