import { motion } from 'framer-motion';
import { Button } from './Button';
import { Sparkles } from './FairyDust';

export function Contact() {
    return (
        <section id="contact" className="py-40 max-w-3xl mx-auto text-center relative px-6">
            <Sparkles count={10} className="inset-0 w-full h-full" />

            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-floral-rose rounded-full blur-[150px] pointer-events-none"
            />

            <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-floral-rose font-serif italic text-2xl mb-8 flex items-center justify-center gap-4"
            >
                <span className="text-ethereal-silver">✧</span>
                May our paths cross
                <span className="text-ethereal-silver">✧</span>
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-8xl font-bold font-serif text-floral-darkSage mb-10 leading-tight"
            >
                Send a <span className="script text-floral-rose text-7xl md:text-9xl ml-2">Whistle</span> to the Winds
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-floral-darkSage/70 text-xl md:text-2xl mb-16 leading-relaxed font-sans max-w-2xl mx-auto italic"
            >
                Whether you have a spark of an idea or want to share the magic of search alchemy,
                I'm always listening for new whispers. Let's cultivate something extraordinary together.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                <a href="mailto:madeleine@example.com">
                    <Button className="px-16 py-6 text-2xl relative shadow-[0_0_30px_rgba(240,98,146,0.2)] font-sans italic">
                        Send a Message
                    </Button>
                </a>
            </motion.div>
        </section>
    );
}
