import { useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { ProjectModal } from '../components/ProjectModal';
import styles from './Portfolio.module.css';

type FilterType = 'All' | 'Gilles Castera' | 'Aziz Hamichi';

export const Portfolio = () => {
    const [filter, setFilter] = useState<FilterType>('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = projects.filter(p =>
        filter === 'All' ? true : p.founder === filter
    );

    return (
        <div className="container section">
            <div className={styles.header}>
                <h1 className={styles.title}>Our Portfolio</h1>
                <p className={styles.disclaimer} style={{ maxWidth: '800px', margin: '1rem auto', fontSize: '0.9rem', opacity: 0.8, fontStyle: 'italic' }}>
                    Note: The following projects demonstrate the extensive experience of our founders. While not all were produced by Mahal Films directly, Gilles Castera and Aziz Hamichi played key professional roles in their execution, contributing to their success in Morocco.
                </p>
                <div className={styles.filters}>
                    {(['All', 'Gilles Castera', 'Aziz Hamichi'] as FilterType[]).map(f => (
                        <button
                            key={f}
                            className={`${styles.filterBtn} ${filter === f ? styles.active : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.grid}>
                {filteredProjects.map((project, idx) => (
                    <div
                        key={idx}
                        className={styles.card}
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className={styles.poster}>
                            {project.poster ? (
                                <img src={project.poster} alt={project.title} loading="lazy" />
                            ) : (
                                <div className={styles.posterPlaceholder}>
                                    <span>{project.title}</span>
                                </div>
                            )}
                            <div className={styles.overlay}>
                                <span className={styles.viewDetails}>View Details</span>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <h3>{project.title}</h3>
                            <div className={styles.meta}>
                                <span>{project.type}</span>
                                {filter === 'All' && (
                                    <span className={styles.founderBadge}>{project.founder.split(' ')[0]}</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
};
