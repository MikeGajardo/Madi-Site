import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export function Button({ className, children, variant = 'primary', ...props }) {
    const variants = {
        primary: "bg-floral-rose text-white hover:bg-floral-rose/90 shadow-sm shadow-floral-rose/20",
        secondary: "bg-transparent border-2 border-ethereal-silver text-floral-darkSage hover:bg-ethereal-silver hover:text-white",
    };

    return (
        <motion.button
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={twMerge(
                "px-8 py-3 rounded-full font-serif font-medium transition-all duration-300",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
