import styles from "./Item.module.css";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ instituicao }) => {
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
            to={`instituicao/${instituicao.id}`}
            className="text-decoration-none text-reset"
        >
            <Container className={styles.card}>
                <Row>
                    <Col xs={5} lg={3}>
                        <img
                            src={instituicao.imagem}
                            className={styles.cardImg}
                            alt=""
                        />
                    </Col>
                    <Col xs={7} lg={9}>
                        <h5 className={styles.cardTitle}>
                            {instituicao.nomeInstituicao}
                        </h5>
                        <span
                            className={styles.tag}
                            style={{
                                backgroundColor: getTagColor(
                                    instituicao.categoria
                                ),
                            }}
                        >
                            {instituicao.categoria}
                        </span>
                        <p className={styles.cardText}>
                            {instituicao.descricao}
                        </p>
                        <p>{`${instituicao.rua}, ${instituicao.numero}, ${instituicao.bairro}, ${instituicao.cidade} (${instituicao.estado}) - ${instituicao.cep}`}</p>
                    </Col>
                </Row>
            </Container>
        </Link>
    );
};

export default Item;
