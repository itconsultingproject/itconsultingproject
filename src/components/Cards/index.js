import styles from '../../Styles.module.css';
import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
    return (
                <div className={styles.containerCard}>
                    <Link className={styles.link} to={`/${id}`}>
                        <img src={cover} alt={title} className={styles.cover}></img>
                        <h2>{title}</h2>
                    </Link>
                </div>

    )
}

export default Card;