import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Institution.module.css";

import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "../../utils/firebase.js";
import {
    Telephone,
    Envelope,
    Instagram,
    Globe,
    Facebook,
    Twitter,
} from "react-bootstrap-icons";

const Institution = ({ id }) => {
    const [instituicao, setInstituicao] = useState(null);
    const [loading, setLoading] = useState(true);
    const db = getFirestore(app); // 'app' é a sua configuração do Firebase

    useEffect(() => {
        const buscarInstituicao = async () => {
            try {
                const docRef = doc(db, "instituicoes", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setInstituicao(docSnap.data());
                } else {
                    console.log("Nenhum registro encontrado!");
                }
            } catch (error) {
                console.error("Erro ao buscar instituição:", error);
            }
            setLoading(false);
        };

        buscarInstituicao();
    }, [id, db]); // Dependências do useEffect

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!instituicao) {
        return <div>Nenhum registro encontrado.</div>;
    }
    return (
        <div>
            <div className={styles.hero}>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col lg={5} xs={12}>
                            <p className={styles.tagText}>
                                {instituicao.categoria}
                            </p>
                            <h2 className={styles.title}>
                                {instituicao.nomeInstituicao}
                            </h2>
                            <div className="d-flex mt-2 mb-4">
                                {instituicao.telefone && (
                                    <a
                                        className={styles.iconLink}
                                        href={`tel:${instituicao.telefone}`}
                                    >
                                        <Telephone />
                                    </a>
                                )}
                                {instituicao.email && (
                                    <a
                                        className={styles.iconLink}
                                        href={`mailto:${instituicao.email}`}
                                    >
                                        <Envelope />
                                    </a>
                                )}
                                {instituicao.instagram && (
                                    <a
                                        className={styles.iconLink}
                                        href={`https://instagram.com/${instituicao.instagram}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Instagram />
                                    </a>
                                )}
                                {instituicao.website && (
                                    <a
                                        className={styles.iconLink}
                                        href={instituicao.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Globe />
                                    </a>
                                )}
                                {instituicao.facebook && (
                                    <a
                                        className={styles.iconLink}
                                        href={`https://facebook.com/${instituicao.facebook}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Facebook />
                                    </a>
                                )}
                                {instituicao.twitter && (
                                    <a
                                        className={styles.iconLink}
                                        href={`https://twitter.com/${instituicao.twitter}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Twitter />
                                    </a>
                                )}
                            </div>
                        </Col>
                        <Col
                            lg={5}
                            xs={12}
                            className="d-flex justify-content-center justify-content-lg-end"
                        >
                            <img
                                src={instituicao.imagem}
                                className="d-block img-fluid rounded-3 shadow-lg"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-white pt-4 pb-4">
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col lg={8} xs={12}>
                            <h3 className={styles.subtitle}>Descrição</h3>
                            <p className={styles.text}>
                                {instituicao.descricao}
                            </p>
                            <h3 className={styles.subtitle}>Endereço</h3>
                            <p
                                className={styles.text}
                            >{`${instituicao.rua}, ${instituicao.numero}, ${instituicao.bairro}, ${instituicao.cidade} (${instituicao.estado}) - ${instituicao.cep}`}</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Institution;
