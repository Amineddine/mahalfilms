import { X } from 'lucide-react';
import type { Project } from '../data/projects';
import styles from './ProjectModal.module.css';
import { useEffect } from 'react';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.close} onClick={onClose}>
                    <X size={24} />
                </button>
                <div className={styles.content}>
                    <div className={styles.imageCol}>
                        {project.poster ? (
                            <img src={project.poster} alt={project.title} />
                        ) : (
                            <div className={styles.placeholder}>
                                <span>No Poster</span>
                            </div>
                        )}
                    </div>
                    <div className={styles.infoCol}>
                        <h2>{project.title}</h2>
                        <div className={styles.meta}>
                            <span className={styles.tag}>{project.type}</span>
                            <span className={styles.founder}>Featured: {project.founder}</span>
                        </div>

                        {project.role && (
                            <div style={{
                                marginTop: '1rem',
                                padding: '0.75rem',
                                backgroundColor: 'rgba(212, 163, 115, 0.1)',
                                border: '1px solid var(--color-accent)',
                                borderRadius: '4px',
                                color: 'var(--color-accent)',
                                fontWeight: 500,
                                fontSize: '0.95rem'
                            }}>
                                {project.role}
                            </div>
                        )}

                        <p className={styles.description}>
                            Notable project featuring the participation and expertise of {project.founder}.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
