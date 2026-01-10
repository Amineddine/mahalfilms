import styles from './About.module.css';
import { Hero } from '../components/Hero';
import { SEO } from '../components/SEO';

const founders = [
    {
        name: 'Gilles Castera',
        role: 'Founder & Producer',
        image: '/gilles castera.jpeg',
        bio: 'With decades of experience in the international film industry, leading major productions across Morocco.'
    },
    {
        name: 'Aziz Hamichi',
        role: 'Founder & Producer',
        image: '/aziz hamichi.jpeg',
        bio: 'An expert in local logistics and government relations, ensuring seamless operations for every shoot.'
    }
];

export const About = () => {
    return (
        <div className={styles.aboutPage}>
            <SEO
                title="About Us - Film Production Services"
                description="Founded by films veterans Gilles Castera and Aziz Hamichi, Mahal Films offers expert production services, location scouting, and government authorization handling in Morocco."
            />
            <Hero
                videoSrc="/The Amateur _ Official Trailer.mp4"
                title="About Mahal Films"
                subtitle="Premier production and location services in Morocco."
                showActions={false}
            />

            <section className={`section container ${styles.story}`}>
                <div className={styles.content}>
                    <p>
                        Mahal Films is a premier production and location service company established in Morocco.
                        We provide complete professional and logistical support for feature films, television, and still photography.
                    </p>
                    <p>
                        Formed by film technicians and managed by certified professionals, we understand the
                        intricacies of physical production. From speeding up government authorizations to
                        handling complex customs clearances, we are your trusted partner on the ground.
                    </p>
                    <p>
                        Our strong network of experienced crews and technicians ensures that every project,
                        regardless of scale, is executed with precision and care.
                    </p>
                </div>
            </section>

            <section className={`section ${styles.foundersSection}`}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>The Founders</h2>
                    <div className={styles.foundersGrid}>
                        {founders.map((founder, idx) => (
                            <div key={idx} className={styles.founderCard}>
                                <div className={styles.imageWrapper}>
                                    <img src={founder.image} alt={founder.name} />
                                </div>
                                <div className={styles.founderInfo}>
                                    <h3>{founder.name}</h3>
                                    <span className={styles.role}>{founder.role}</span>
                                    <p>{founder.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
