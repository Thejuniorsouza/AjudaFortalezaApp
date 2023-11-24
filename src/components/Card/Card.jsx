import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, title, tag, description, imgUrl }) => {
    function getTagColor(tag) {
        const colors = {
            Animais: "#8d8800",
            "Ajuda Humanitária": "#f4513f",
            Educação: "#0faab5",
            Saúde: "#3757ae",
            "Meio Ambiente": "#649162",
            "Direitos Humanos": "#ac60ac",
            "Cultura e Arte": "#a46976",
            "Desenvolvimento Comunitário": "#8d853f",
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
