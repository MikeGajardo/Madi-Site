import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Sparkles } from './FairyDust';
import { ButterflySwarm } from './Butterfly';
import { Dragonfly } from './Dragonfly';

export function Hero() {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center max-w-4xl relative">
            <Dragonfly />
            <ButterflySwarm count={4} />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -top-20 -left-20 w-80 h-80 bg-floral-rose/20 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -5, 0]
                }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute top-40 right-0 w-96 h-96 bg-floral-lavender/20 rounded-full blur-[120px]"
            />

            <div className="relative">
                <Sparkles className="w-full h-32 -top-16" count={8} />

                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-floral-sage font-serif italic mb-4 text-xl flex items-center gap-3"
                >
                    <span className="text-ethereal-silver">✥</span>
                    A warm welcome, I am
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl md:text-9xl font-bold font-serif text-floral-darkSage mb-6 leading-tight relative"
                >
                    Madi <span className="text-floral-rose relative inline-block">
                        Fernandez
                        <motion.span
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-4 -right-8 text-4xl text-ethereal-silver"
                        >✧</motion.span>
                    </span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-5xl font-serif text-floral-sage/80 mb-10 italic leading-relaxed"
                >
                    Cultivating <span className="script text-floral-rose text-5xl md:text-7xl ml-2">magic</span> in the digital garden.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-floral-darkSage/70 text-lg md:text-2xl max-w-2xl mb-14 font-sans leading-relaxed relative"
                >
                    I'm a <span className="font-medium text-floral-darkSage">Lead Content Strategist</span> who weaves paths
                    from technical search to ethereal human experiences.
                    <Sparkles className="w-20 h-20 -right-10 -top-5" count={3} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link to="/about">
                        <Button className="px-12 py-5 text-xl relative group overflow-hidden font-sans italic">
                            <span className="relative z-10">Wander through the garden</span>
                            <motion.div
                                className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                            />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
