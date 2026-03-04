import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { ExternalLink, Sparkle } from 'lucide-react';
import { Sparkles } from './FairyDust';

const projects = [
    {
        title: 'Salesforce Lightning Blueprint',
        description: 'An alchemy of technical deep-dives into 5 critical Salesforce Lightning features that marketers often overlook, helping teams maximize their digital destiny.',
        tags: ['Salesforce', 'CRM Strategy', 'Technical Writing'],
        link: 'https://www.linkedin.com/posts/madeleinefernandez_5-salesforce-lightning-features-youre-missing-activity-7123456789-abcd'
    },
    {
        title: 'Alchemy of Destination Marketing',
        description: 'An industry-focused whitepaper exploring how DMOs can leverage emerging travel technology to build resilient, long-term brand souls.',
        tags: ['DMO Strategy', 'SEO', 'Travel Tech'],
        link: 'https://www.sojern.com/blog/evolution-of-destination-marketing'
    }
];

export function Work() {
    return (
        <section id="work" className="py-32 max-w-6xl mx-auto relative">
            <Sparkles count={5} className="top-10 right-10 w-40 h-40" />

            <SectionHeader title="Fairy Tales of Work" number="03" />

            <div className="grid md:grid-cols-2 gap-12 mt-16 px-4">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-floral-rose/5 rounded-[3rem] blur-xl group-hover:bg-floral-rose/10 transition-all duration-500" />

                        <div className="h-full p-12 rounded-[2.5rem] bg-white/40 border border-white/60 backdrop-blur-md hover:border-floral-rose/30 transition-all duration-700 shadow-[0_10px_40px_rgba(217,165,115,0.1)] group-hover:shadow-[0_20px_60px_rgba(217,165,115,0.15)] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-30 group-hover:rotate-12 transition-all duration-700">
                                <Sparkle size={60} strokeWidth={0.5} />
                            </div>

                            <div className="flex justify-between items-start mb-10">
                                <div className="text-floral-rose animate-sparkle">
                                    <Sparkle size={32} strokeWidth={1.5} />
                                </div>
                                <div className="text-floral-sage hover:text-floral-rose transition-colors">
                                    <ExternalLink size={20} />
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold font-serif text-floral-darkSage mb-4 group-hover:tracking-wide transition-all duration-500 italic">
                                {project.title}
                            </h3>

                            <p className="text-floral-darkSage/70 mb-10 leading-relaxed text-lg font-sans">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-4 py-1.5 rounded-full bg-floral-cream/80 border border-floral-sage/10 text-floral-sage font-serif italic text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
