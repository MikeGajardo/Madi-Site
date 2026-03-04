import { motion } from 'framer-motion';

export function FairyDust() {
    const particles = Array.from({ length: 20 });

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        opacity: 0,
                        x: Math.random() * 100 + 'vw',
                        y: Math.random() * 100 + 'vh'
                    }}
                    animate={{
                        opacity: [0, 0.5, 0],
                        x: [`${Math.random() * 100}vw`, `${Math.random() * 100}vw`],
                        y: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute w-1 h-1 bg-ethereal-silver rounded-full blur-[1px]"
                />
            ))}
        </div>
    );
}

export function Sparkles({ count = 5, className = "" }) {
    return (
        <div className={`absolute pointer-events-none ${className}`}>
            {Array.from({ length: count }).map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.2, 0.5],
                        rotate: [0, 90, 0]
                    }}
                    transition={{
                        duration: Math.random() * 2 + 1,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                    className="absolute"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-ethereal-silver">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
}
