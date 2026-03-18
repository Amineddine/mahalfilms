import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <img src="/mahalfilmslogo.png" alt="MAHAL FILMS" style={{ height: '40px', width: 'auto', marginBottom: '1rem', filter: 'brightness(0) invert(1)' }} />
                        {/* Note: Inverted brightness for dark mode if logo is dark. If logo is already light, remove filter. Assuming transparent PNG. */}
                        <p>Production Services in Morocco</p>
                    </div>
                    <div className={styles.links}>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className={styles.contact}>
                        <p>Email: contact@mahalfilms.com</p>
                        <p>Email: l.khabid@mahalfilms.com</p>
                        <p>Aziz Hamichi: +212 6 61 23 10 31</p>
                        <p>Gilles Castera: +33 6 07 84 14 51</p>
                        <p>Lahoucine Khabid: +212 661-283411</p>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Mahal Films. All rights reserved.</p>
                    <div className={styles.legal}>
                        <span>CCM Accredited</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
