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
    const [instituicao, setInstituicao] = useState({
        bairro: "",
        categoria: "",
        cep: "",
        cidade: "",
        descricao: "Carregando...",
        email: "",
        estado: "",
        facebook: "",
        id: "",
        imagem: "",
        instagram: "",
        nomeInstituicao: "Carregando...",
        numero: "",
        rua: "Carregando...",
        telefone: "",
        twitter: "",
        website: "",
    });
    const db = getFirestore(app);

    useEffect(() => {
        const buscarInstituicao = async () => {
            try {
                const docRef = doc(db, "instituicoes", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setInstituicao(docSnap.data());
                } else {
                    setInstituicao({
                        bairro: "",
                        categoria: "",
                        cep: "",
                        cidade: "",
                        descricao: "",
                        email: "",
                        estado: "",
                        facebook: "",
                        id: "",
                        imagem: "",
                        instagram: "",
                        nomeInstituicao: "404 - Não encontrado",
                        numero: "",
                        rua: "",
                        telefone: "",
                        twitter: "",
                        website: "",
                    });
                }
            } catch (error) {
                console.error(error);
            }
        };

        buscarInstituicao();
    }, [id, db]);

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
