import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, title, tag, description, imgUrl }) => {
    function getTagColor(tag) {
        const colors = {
            animais: "#8d8800",
            "ajuda humanitária": "#f4513f",
            educação: "#0faab5",
            saúde: "#3757ae",
            "meio ambiente": "#649162",
            "direitos humanos": "#ac60ac",
            "cultura e arte": "#a46976",
            "desenvolvimento comunitário": "#8d853f",
        };

        return colors[tag] || "#777777"; // Cinza claro como cor padrão
    }
    return (
        <Link
            to={`instituicao/${id}`}
            className="text-decoration-none text-reset"
        >
            <div className={styles.card}>
                <h5 className={styles.cardTitle}>{title}</h5>
                <span
                    className={styles.tag}
                    style={{ backgroundColor: getTagColor(tag) }}
                >
                    {tag}
                </span>
                <p className={styles.cardText}>{description}</p>
                <img src={imgUrl} className={styles.cardImg} alt="" />
            </div>
        </Link>
    );
};

export default Card;
