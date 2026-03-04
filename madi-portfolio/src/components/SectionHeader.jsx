import { motion } from 'framer-motion';

export function SectionHeader({ title, number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end gap-6 mb-24 relative"
        >
            <div className="relative">
                <span className="script text-floral-rose text-6xl absolute -top-12 -left-6 rotate-[-15deg] opacity-60">
                    Chapter {number}
                </span>
                <h2 className="text-4xl md:text-7xl font-bold font-serif text-floral-darkSage tracking-tight relative z-10">
                    {title}
                </h2>
            </div>
            <div className="hidden md:block h-[2px] bg-gradient-to-r from-floral-sage/40 to-transparent flex-grow mb-6 ml-4" />
            <div className="text-ethereal-silver animate-float absolute -right-8 top-0 hidden lg:block">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
            </div>
        </motion.div>
    );
}
