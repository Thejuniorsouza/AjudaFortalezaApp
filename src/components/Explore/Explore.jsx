import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../Card/Card";

import { useEffect, useState } from "react";
import {
    getFirestore,
    doc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
} from "firebase/firestore";
import app from "../../utils/firebase.js";

const Explore = () => {
    const [destaques, setDestaques] = useState(null);
    const [loading, setLoading] = useState(true);
    const db = getFirestore(app);

    useEffect(() => {
        const buscarDestaques = async () => {
            try {
                // Buscando lista de IDs
                const docRef = doc(db, "destaques", "1");
                const docSnap = await getDoc(docRef);
                const instIDs = docSnap.data().ids.split(",");
                // Buscando instituições dos IDs
                const collectionRef = collection(db, "instituicoes");
                const q = query(
                    collectionRef,
                    where("__name__", "in", instIDs)
                );
                const instSnap = await getDocs(q);
                const instituicoes = instSnap.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setDestaques(instituicoes);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar destaques:", error);
            }
        };

        buscarDestaques();
    }, [db]);

    return (
        <div className="bg-white pt-5 pb-5">
            <h2 className="text-center mb-5">Destaques</h2>
            {/* <Tabs
                defaultActiveKey="animal"
                id="tabs"
                className="bg-transparent"
            >
                <Tab eventKey="aju" title="Ajuda humanitária"></Tab>
                <Tab eventKey="animal" title="Animais"> */}
            <Container>
                <Row>
                    {!loading &&
                        destaques.map((ong) => (
                            <Col
                                key={ong.id}
                                className="mb-4"
                                lg={4}
                                md={6}
                                xs={12}
                            >
                                <Card
                                    id={ong.id}
                                    title={ong.nomeInstituicao}
                                    description={ong.descricao}
                                    tag={ong.categoria}
                                    imgUrl={ong.imagem}
                                />
                            </Col>
                        ))}
                </Row>
            </Container>
            {/* </Tab>
                <Tab eventKey="crianca" title="Crianças"></Tab>
                <Tab eventKey="mulher" title="Mulheres"></Tab>
                <Tab eventKey="saude" title="Saúde"></Tab>
            </Tabs> */}
        </div>
    );
};

export default Explore;
