import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Sparkles } from './FairyDust';

export function About() {
    const seeds = [
        'SEO Content Strategy', 'UX-Focused SEO', 'Site Architecture',
        'Brand Storytelling', 'Google Analytics', 'Google Ads',
        'Salesforce Lightning', 'Content Ops'
    ];

    return (
        <section id="about" className="py-32 max-w-5xl mx-auto relative">
            <Sparkles count={4} className="top-20 right-0 w-32 h-32" />

            <SectionHeader title="The Roots of My Magic" number="01" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 items-center">
                <div className="lg:col-span-2 space-y-8 text-floral-darkSage/80 text-xl leading-relaxed">
                    <div className="relative">
                        <span className="script text-floral-rose text-5xl absolute -top-8 -left-8 -rotate-12 opacity-50">Discovery</span>
                        Hello! I'm Madi, a user-centered strategist who walks the invisible paths between
                        technical search algorithms and the soul of a brand. I believe digital architecture
                        should feel as organic and welcoming as a hidden woodland clearing.
                    </div>
                    <p>
                        Currently, I nurture the <span className="text-floral-rose font-medium italic underline decoration-floral-lavender/30">SEO Content Strategy at Princess Cruises</span>,
                        where I weave data into narratives and guide global digital gardens toward their full bloom.
                    </p>
                    <div className="bg-white/40 p-10 rounded-[60%_40%_70%_30%/40%_50%_60%_70%] backdrop-blur-sm border border-floral-sage/10 relative overflow-hidden group">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -right-10 -bottom-10 w-40 h-40 border border-floral-rose/20 rounded-full"
                        />
                        <h4 className="font-serif italic text-floral-sage mb-4 text-2xl flex items-center gap-2">
                            <span className="text-ethereal-silver">✦</span> Enchanted Skills
                        </h4>
                        <ul className="grid grid-cols-2 gap-4 font-serif italic text-lg text-floral-darkSage/70">
                            {seeds.map(seed => (
                                <li key={seed} className="flex items-center gap-3 group-hover:text-floral-rose transition-colors">
                                    <span className="text-floral-rose text-xl animate-sparkle">✻</span> {seed}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="relative group max-w-[350px] mx-auto">
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-8 border border-floral-sage/20 magical-border"
                    />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-12 border border-floral-rose/10 rounded-full"
                    />
                    <div className="relative aspect-[4/5] magical-border overflow-hidden border-8 border-white shadow-[0_20px_50px_rgba(152,166,139,0.2)]">
                        <img
                            src="/images/profile.png"
                            alt="Madi Fernandez"
                            className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-floral-rose/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    <Sparkles count={3} className="bottom-0 -right-4 w-16 h-16" />
                </div>
            </div>
        </section>
    );
}
