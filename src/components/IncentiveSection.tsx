import styles from './IncentiveSection.module.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const IncentiveSection = () => {
    return (
        <section className={styles.incentive}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2>30% Expense Reimbursement</h2>
                    <p>
                        Take advantage of Morocco's attractive financial incentive.
                        Available for feature films, TV series, documentaries, and more.
                    </p>
                    <Link to="/contact">
                        <Button variant="primary">Enquire Now</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
