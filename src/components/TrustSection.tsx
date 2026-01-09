import { ShieldCheck, FileCheck, Truck, Users } from 'lucide-react';
import styles from './TrustSection.module.css';

export const TrustSection = () => {
    const items = [
        {
            icon: <ShieldCheck size={32} />,
            title: "CCM Accredited",
            desc: "Fully accredited by the Moroccan Cinematographic Center."
        },
        {
            icon: <FileCheck size={32} />,
            title: "Fast Permits",
            desc: "Expedited government authorizations & filming permits."
        },
        {
            icon: <Truck size={32} />,
            title: "Customs Clearance",
            desc: "Hassle-free equipment import/export via transit agents."
        },
        {
            icon: <Users size={32} />,
            title: "Expert Crew",
            desc: "Access to experienced, multilingual local technicians."
        },
    ];

    return (
        <section className={`section ${styles.trust}`}>
            <div className="container">
                <div className={styles.grid}>
                    {items.map((item, idx) => (
                        <div key={idx} className={styles.card}>
                            <div className={styles.icon}>{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
