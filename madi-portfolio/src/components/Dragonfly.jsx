import { motion } from 'framer-motion';

export function Dragonfly() {
    return (
        <motion.div
            initial={{
                x: '90vw',
                y: '5vh',
                scale: 0.1,
                rotate: -30,
                opacity: 0,
                filter: 'blur(10px)'
            }}
            animate={{
                // Flight path: Starts right, circles near name, comes VERY close, then exits
                x: ['90vw', '70vw', '45vw', '50vw', '80vw', '130vw'],
                y: ['5vh', '15vh', '25vh', '35vh', '20vh', '-10vh'],
                scale: [0.1, 0.5, 1.5, 10, 2, 0.1],
                rotate: [-30, 0, 45, 90, 180, 225],
                opacity: [0, 1, 1, 1, 1, 0],
                filter: ['blur(10px)', 'blur(0px)', 'blur(0px)', 'blur(0px)', 'blur(0px)', 'blur(5px)']
            }}
            transition={{
                duration: 12,
                times: [0, 0.15, 0.35, 0.6, 0.8, 1],
                ease: "easeInOut",
            }}
            className="fixed z-[999] pointer-events-none"
        >
            <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    {/* Wings - Upper */}
                    <motion.path
                        d="M 50 50 C 15 15, 15 45, 50 50 C 15 85, 15 55, 50 50"
                        fill="rgba(200, 200, 200, 0.4)"
                        stroke="white"
                        strokeWidth="0.3"
                        animate={{ rotateY: [0, 85, 0] }}
                        transition={{ duration: 0.05, repeat: Infinity }}
                    />
                    <motion.path
                        d="M 50 50 C 85 15, 85 45, 50 50 C 85 85, 85 55, 50 50"
                        fill="rgba(200, 200, 200, 0.4)"
                        stroke="white"
                        strokeWidth="0.3"
                        animate={{ rotateY: [0, -85, 0] }}
                        transition={{ duration: 0.05, repeat: Infinity, delay: 0.025 }}
                    />
                    {/* Body */}
                    <path
                        d="M 50 25 L 52 75 L 48 75 Z"
                        fill="#4A5568"
                    />
                    <circle cx="50" cy="25" r="3" fill="#4A5568" />
                </svg>
                <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full opacity-40 pointer-events-none" />
            </div>
        </motion.div>
    );
}
