import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Sparkles } from './FairyDust';

const jobs = [
    {
        company: 'Princess Cruises',
        title: 'Lead SEO Content Strategist',
        range: 'January 2024 — Present',
        duties: [
            'Spearheading brand SEO content strategy to elevate online presence and drive organic growth.',
            'Nurturing search-optimized, user-centered content across global digital platforms.',
            'Guiding high-impact agency partnerships to scale digital operations with intention.'
        ]
    },
    {
        company: 'Sojern',
        title: 'Lead Content Strategist',
        range: '2021 — 2023',
        duties: [
            'Crafted content blueprints for Destination Marketing Organizations and travel brands.',
            'Created resources focused on the alchemy of travel marketing technology.',
            'Strategic guide for Salesforce platform education for travel marketers.'
        ]
    },
    {
        company: 'Marketing & Digital Media',
        title: 'Early Career Focus',
        range: '2016 — 2020',
        duties: [
            'Expertise in social media alchemy, email marketing, and digital content creation.',
            'Optimized digital performance by establishing consistent brand souls.',
            'Managing the flow of digital marketing campaigns and content pipelines.'
        ]
    }
];

export function Experience() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="experience" className="py-32 max-w-4xl mx-auto relative">
            <Sparkles count={2} className="left-0 bottom-20 w-20 h-20" />

            <SectionHeader title="Chronicles of Growth" number="02" />

            <div className="flex flex-col md:flex-row gap-12 mt-16">
                <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-l-2 border-floral-sage/10 min-w-[200px]">
                    {jobs.map((job, i) => (
                        <button
                            key={job.company}
                            onClick={() => setActiveTab(i)}
                            className={`px-8 py-6 text-left font-serif italic text-xl transition-all relative
                ${activeTab === i
                                    ? 'text-floral-rose'
                                    : 'text-floral-sage hover:text-floral-rose'}`}
                        >
                            {activeTab === i && (
                                <motion.div
                                    layoutId="tab-indicator"
                                    className="absolute left-[-2px] inset-y-2 w-1 bg-floral-rose rounded-full shadow-[0_0_8px_rgba(217,165,115,0.5)]"
                                />
                            )}
                            {job.company}
                        </button>
                    ))}
                </div>

                <div className="flex-grow pt-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white/30 p-12 rounded-[2rem] border border-white/50 backdrop-blur-sm relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-20">
                                <svg width="100" height="100" viewBox="0 0 100 100">
                                    <path d="M 50 10 C 70 10 90 30 90 50 C 90 70 70 90 50 90 C 30 90 10 70 10 50 C 10 30 30 10 50 10 Z" fill="currentColor" className="text-floral-rose" />
                                </svg>
                            </div>

                            <h3 className="text-3xl font-bold font-serif text-floral-darkSage mb-2">
                                {jobs[activeTab].title}
                            </h3>
                            <p className="text-floral-rose script text-4xl mb-6">at {jobs[activeTab].company}</p>
                            <p className="font-serif italic text-lg text-floral-sage mb-10 tracking-wide">{jobs[activeTab].range}</p>

                            <ul className="space-y-6">
                                {jobs[activeTab].duties.map((duty, i) => (
                                    <li key={i} className="flex gap-5 text-floral-darkSage/70 leading-relaxed text-lg group">
                                        <span className="text-floral-rose mt-1.5 transition-transform group-hover:rotate-45">✧</span>
                                        <span>{duty}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
