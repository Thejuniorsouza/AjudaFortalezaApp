import styles from "./Card.module.css";

const Card = ({ onClick, title, description, imgUrl }) => {
    return (
        <div className={styles.card}>
            <h5 className={styles.cardTitle}>{title}</h5>
            <p className={styles.cardText}>{description}</p>
            <img src={imgUrl} className={styles.cardImg} alt="" />
        </div>
    );
};

export default Card;
