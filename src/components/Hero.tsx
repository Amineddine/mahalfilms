import styles from './Hero.module.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import React from 'react';

interface HeroProps {
    videoSrc?: string;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    showActions?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
    videoSrc,
    title,
    subtitle,
    showActions = true
}) => {
    return (
        <section className={styles.hero}>
            {videoSrc && (
                <video
                    className={styles.videoBg}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            )}
            <div className={styles.overlay} />
            <div className={`container ${styles.container}`}>
                <h1 className={styles.title}>
                    {title}
                </h1>
                {subtitle && (
                    <p className={styles.subtitle}>
                        {subtitle}
                    </p>
                )}
                {showActions && (
                    <div className={styles.actions}>
                        <Link to="/contact">
                            <Button variant="primary" size="lg">Start Your Project</Button>
                        </Link>
                        <Link to="/services">
                            <Button variant="outline" size="lg">Explore Services</Button>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};
