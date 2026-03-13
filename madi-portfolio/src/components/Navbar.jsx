import { motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';

const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
];

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 w-full z-50 bg-floral-cream/80 backdrop-blur-md border-b border-floral-sage/10"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-floral-sage text-2xl font-serif font-bold italic"
                >
                    <Link to="/">MF</Link>
                </motion.div>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <NavLink
                                to={link.href}
                                className={({ isActive }) =>
                                    `font-serif text-sm transition-colors ${isActive ? 'text-floral-rose' : 'text-floral-darkSage hover:text-floral-rose'
                                    }`
                                }
                            >
                                <span className="text-floral-sage italic mr-1">0{i + 1}.</span> {link.name}
                            </NavLink>
                        </motion.div>
                    ))}
                    <motion.a
                        href="/resume.pdf"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <button className="px-5 py-2 border-2 border-floral-sage text-floral-sage rounded-full hover:bg-floral-sage hover:text-floral-cream transition-all font-serif text-sm italic font-medium">
                            Curriculum Vitae
                        </button>
                    </motion.a>
                </div>
            </div>
        </motion.nav>
    );
}
