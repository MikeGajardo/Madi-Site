import { motion } from 'framer-motion';

export function Butterfly({ color = "rgba(217, 165, 165, 0.6)", size = 20 }) {
    const randomDelay = Math.random() * 5;
    const randomDuration = 10 + Math.random() * 20;

    return (
        <motion.div
            initial={{
                x: '-10vw',
                y: Math.random() * 100 + 'vh',
                opacity: 0
            }}
            animate={{
                x: '110vw',
                y: [
                    Math.random() * 100 + 'vh',
                    Math.random() * 100 + 'vh',
                    Math.random() * 100 + 'vh',
                ],
                opacity: [0, 1, 1, 0]
            }}
            transition={{
                duration: randomDuration,
                delay: randomDelay,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="fixed pointer-events-none z-0"
            style={{ width: size, height: size }}
        >
            <motion.svg
                viewBox="0 0 50 50"
                animate={{
                    rotateY: [0, 80, 0, -80, 0],
                }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{ fill: color }}
            >
                <path d="M25 25 C25 25 10 5 10 15 C10 25 25 35 25 35 C25 35 40 25 40 15 C40 5 25 25 25 25 Z" />
                <path d="M25 25 C25 25 10 45 10 35 C10 25 25 15 25 15 C25 15 40 25 40 35 C40 45 25 25 25 25 Z" />
            </motion.svg>
        </motion.div>
    );
}

export function ButterflySwarm({ count = 8 }) {
    const butterflyColors = [
        "rgba(240, 98, 146, 0.4)", // Rose Pink
        "rgba(206, 147, 216, 0.4)", // Light Purple
        "rgba(192, 192, 192, 0.4)", // Silver
        "rgba(252, 228, 236, 0.4)", // Pastel Pink
    ];

    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <Butterfly
                    key={i}
                    color={butterflyColors[i % butterflyColors.length]}
                    size={15 + Math.random() * 15}
                />
            ))}
        </>
    );
}
