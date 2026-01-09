import { projects } from '../data/projects';
import styles from './Gallery.module.css';

export const Gallery = () => {
    // Use projects with posters to simulate gallery content
    const galleryImages = projects
        .filter(p => p.poster)
        .slice(0, 20); // Limit to 20 for performance/demo

    return (
        <div className="container section">
            <div className={styles.header}>
                <h1 className={styles.title}>Production Gallery</h1>
                <p className={styles.subtitle}>Behind the scenes and on location in Morocco.</p>
            </div>

            <div className={styles.masonry}>
                {galleryImages.map((img, idx) => (
                    <div key={idx} className={styles.item}>
                        <img src={img.poster} alt={img.title} loading="lazy" />
                        <div className={styles.caption}>
                            <span>{img.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
