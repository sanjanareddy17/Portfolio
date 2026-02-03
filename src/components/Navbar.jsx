import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {  // Removed unused 'resumeData'
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                padding: '0px 40px',
                height: '80px', // Fixed height
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100,
                backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                boxShadow: scrolled ? '0 10px 30px -10px rgba(2,12,27,0.7)' : 'none',
                transition: 'all 0.25s ease'
            }}
        >
            <div style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '1.5rem' }}>SR.</div>
            <ul style={{ display: 'flex', gap: '2rem' }}>
                {navLinks.map((link, i) => (
                    <motion.li
                        key={link.name}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                        <a
                            href={link.href}
                            style={{
                                color: 'var(--text-primary)',
                                fontSize: '13px',
                                fontFamily: 'var(--font-mono)',
                                textDecoration: 'none'
                            }}
                            onMouseOver={(e) => e.target.style.color = 'var(--accent)'}
                            onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}
                        >
                            {link.name}
                        </a>
                    </motion.li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navbar;
