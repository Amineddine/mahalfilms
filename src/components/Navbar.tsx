import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import { Button } from './Button';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <img src="/mahalfilmslogo.png" alt="MAHAL FILMS" />
                </Link>

                {/* Desktop Nav */}
                <div className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact">
                        {/* Changed variant to outline or ghost to fit inside the pill better, 
                            or keep primary but smaller */}
                        <Button variant="primary" size="sm" style={{ padding: '0.5rem 1.25rem' }}>Quote</Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav */}
                <div className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
                    {/* Mobile Close Button (Extra, for better UX inside the fullscreen menu) */}
                    <button
                        className={styles.mobileToggle}
                        onClick={() => setIsOpen(false)}
                        style={{ position: 'absolute', top: '2rem', right: '2rem', display: 'block' }}
                    >
                        <X size={32} />
                    </button>

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={styles.mobileNavLink}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link to="/contact" onClick={() => setIsOpen(false)} style={{ marginTop: '2rem' }}>
                        <Button variant="primary" size="lg">Get a Quote</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
