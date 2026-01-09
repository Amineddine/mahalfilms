import styles from './FeaturedProjects.module.css';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const FeaturedProjects = () => {
    // Select a few top projects that preferably have posters
    const featured = projects
        .filter(p => p.poster)
        .slice(0, 4);

    return (
        <section className={`section ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Featured Works</h2>
                    <Link to="/portfolio" className={styles.link}>
                        View All <ArrowRight size={20} />
                    </Link>
                </div>
                <div className={styles.grid}>
                    {featured.map((project, idx) => (
                        <div key={idx} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={project.poster} alt={project.title} loading="lazy" />
                            </div>
                            <div className={styles.info}>
                                <h4>{project.title}</h4>
                                <span>{project.type}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
