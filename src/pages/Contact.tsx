import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/Button';
import styles from './Contact.module.css';

export const Contact = () => {
    return (
        <div className="container section">
            <div className={styles.grid}>
                <div className={styles.info}>
                    <h1 className={styles.title}>Get in Touch</h1>
                    <p className={styles.subtitle}>
                        Ready to start your production in Morocco? We are here to help.
                        We respond fast.
                    </p>

                    <div className={styles.contactDetails}>
                        <div className={styles.detail}>
                            <Mail className={styles.icon} />
                            <div>
                                <h3>Email</h3>
                                <p>contact@mahalfilms.com</p>
                            </div>
                        </div>
                        <div className={styles.detail}>
                            <Phone className={styles.icon} />
                            <div>
                                <h3>Phone</h3>
                                <p>+212 661 123 456</p>
                            </div>
                        </div>
                        <div className={styles.detail}>
                            <MapPin className={styles.icon} />
                            <div>
                                <h3>Base</h3>
                                <p>Marrakech & Casablanca, Kingdom of Morocco</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.note}>
                        <h3>What to include in your request:</h3>
                        <ul>
                            <li>Shoot dates (approximate is fine)</li>
                            <li>Crew size estimation</li>
                            <li>Key locations or brief</li>
                            <li>Equipment requirements</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.formWrapper}>
                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.formGroup}>
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Email</label>
                            <input type="email" placeholder="project@studio.com" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Production Type</label>
                            <select>
                                <option>Feature Film</option>
                                <option>TV Series</option>
                                <option>Commercial</option>
                                <option>Documentary</option>
                                <option>Still Photography</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label>Estimated Dates</label>
                            <input type="text" placeholder="e.g. Oct - Nov 2025" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Message</label>
                            <textarea rows={5} placeholder="Tell us about your project..." required></textarea>
                        </div>
                        <Button variant="primary" size="lg" type="submit" style={{ width: '100%' }}>
                            Send Request
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};
