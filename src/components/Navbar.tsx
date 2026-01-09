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
            <div className={`container ${styles.container}`}>
                <Link to="/" className={styles.logo}>
                    <img src="/mahalfilmslogo.png" alt="MAHAL FILMS" style={{ height: '50px', width: 'auto' }} />
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
                        <Button variant="primary" size="sm">Get a Quote</Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Nav */}
                <div className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={styles.mobileNavLink}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};
