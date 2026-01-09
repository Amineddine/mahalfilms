import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';

const services = [
    {
        title: "Permits & Government Authorization",
        description: "We navigate the bureaucracy so you don't have to.",
        points: [
            "Shooting permits for all regions",
            "Government liaison & official authorizations",
            "Drone & aerial filming clearances"
        ]
    },
    {
        title: "Equipment Leasing",
        description: "State-of-the-art gear available locally.",
        points: [
            "Camera & lighting packages",
            "Grip & rigging equipment",
            "Specialized production vehicles"
        ]
    },
    {
        title: "Casting",
        description: "Finding the perfect faces for your story.",
        points: [
            "Local casting directors",
            "Large extras database",
            "Featured talent scouting"
        ]
    },
    {
        title: "Locations",
        description: "Morocco offers diverse, stunning landscapes.",
        points: [
            "Location scouting & management",
            "Desert, mountain, city, and coastal options",
            "Private property negotiations"
        ]
    },
    {
        title: "Logistics & Support",
        description: "Comprehensive production management.",
        points: [
            "Accommodation & transport booking",
            "Catering services",
            "Budgeting & scheduling assistance"
        ]
    },
    {
        title: "Customs Clearance",
        description: "Fast-track entry for your gear.",
        points: [
            "ATA Carnet management",
            "Temporary import/export handling",
            "Clearance for daily rushes"
        ]
    }
];

export const Services = () => {
    return (
        <div className="container section">
            <div className={styles.header}>
                <h1 className={styles.title}>Our Services</h1>
                <p className={styles.subtitle}>
                    Everything you need for a smooth production experience in Morocco.
                </p>
            </div>

            <div className={styles.grid}>
                {services.map((service, idx) => (
                    <div key={idx} className={styles.card}>
                        <h3>{service.title}</h3>
                        <p className={styles.desc}>{service.description}</p>
                        <ul className={styles.list}>
                            {service.points.map((point, pIdx) => (
                                <li key={pIdx}>{point}</li>
                            ))}
                        </ul>
                        <div className={styles.cta}>
                            <Link to="/contact">
                                <Button variant="outline" size="sm">Discuss your shoot</Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
