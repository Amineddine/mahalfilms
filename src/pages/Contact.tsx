import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';
import styles from './Contact.module.css';
import { useForm, ValidationError } from '@formspree/react';
import { SEO } from '../components/SEO';

export const Contact = () => {
    const [state, handleSubmit] = useForm("mkoowkqn");

    return (
        <div className="container section">
            <SEO
                title="Contact Us - Production Support"
                description="Contact Mahal Films for your next production in Morocco. We provide fast quotes and logistical support for shoots in Marrakech, Casablanca, and beyond."
            />
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
                                <h3>Phones</h3>
                                <p>Aziz Hamichi: +212 6 61 23 10 31</p>
                                <p>Gilles Castera: +33 6 07 84 14 51</p>
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
                    {state.succeeded ? (
                        <div className={styles.successMessage}>
                            <CheckCircle size={48} color="var(--color-accent)" />
                            <h2>Message Sent!</h2>
                            <p>Thank you for contacting Mahal Films. We will get back to you shortly.</p>
                            <Button variant="outline" size="sm" onClick={() => window.location.reload()}>
                                Send Another
                            </Button>
                        </div>
                    ) : (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name</label>
                                <input id="name" type="text" name="name" placeholder="Your Name" required />
                                <ValidationError prefix="Name" field="name" errors={state.errors} />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" name="email" placeholder="project@studio.com" required />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="productionType">Production Type</label>
                                <select id="productionType" name="productionType">
                                    <option>Feature Film</option>
                                    <option>TV Series</option>
                                    <option>Commercial</option>
                                    <option>Documentary</option>
                                    <option>Still Photography</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="dates">Estimated Dates</label>
                                <input id="dates" type="text" name="dates" placeholder="e.g. Oct - Nov 2025" />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows={5} placeholder="Tell us about your project..." required></textarea>
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>
                            <Button variant="primary" size="lg" type="submit" style={{ width: '100%' }} disabled={state.submitting}>
                                {state.submitting ? 'Sending...' : 'Send Request'}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};
