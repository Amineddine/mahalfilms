import React from 'react';
import { motion } from 'framer-motion';
import styles from './FilmStrip.module.css';
import { type Project } from '../data/projects';

interface FilmStripProps {
    projects: Project[];
}

export const FilmStrip: React.FC<FilmStripProps> = ({ projects }) => {
    // We duplicate the list to ensure seamless looping
    // Only taking projects with posters
    const validProjects = projects.filter(p => p.poster);
    const duplicatedProjects = [...validProjects, ...validProjects, ...validProjects]; // Triple to be safe for wide screens

    return (
        <div className={styles.track}>
            <motion.div
                className={styles.track}
                animate={{
                    x: ['0%', '-50%'],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40, // Adjust speed here (higher = slower)
                        ease: "linear",
                    },
                }}
                style={{ width: 'fit-content' }}
            >
                {duplicatedProjects.map((project, idx) => (
                    <div key={`${project.title}-${idx}`} className={styles.card}>
                        <img
                            src={project.poster}
                            alt={project.title}
                            loading="lazy"
                        />
                        <div className={styles.title}>{project.title}</div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
