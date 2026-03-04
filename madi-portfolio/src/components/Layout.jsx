import { Navbar } from './Navbar';
import { FairyDust } from './FairyDust';
import { ButterflySwarm } from './Butterfly';

export function Layout({ children }) {
    return (
        <div className="min-h-screen bg-floral-cream font-sans selection:bg-floral-rose/30 selection:text-floral-darkSage relative overflow-x-hidden">
            <FairyDust />
            <ButterflySwarm count={12} />
            <div className="absolute inset-0 floral-pattern pointer-events-none opacity-10" />
            <Navbar />
            <main className="max-w-7xl mx-auto px-6 pt-20 relative z-10">
                {children}
            </main>
            <footer className="py-20 text-center border-t border-floral-sage/20 mt-20 relative z-10">
                <p className="font-serif text-sm italic text-floral-sage flex items-center justify-center gap-2">
                    <span className="text-ethereal-silver animate-pulse">✧</span>
                    Designed & Curated with magic by <span className="font-bold text-floral-darkSage script text-2xl ml-1">Madi Fernandez</span>
                    <span className="text-ethereal-silver animate-pulse">✧</span>
                </p>
            </footer>
        </div>
    );
}
