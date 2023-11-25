import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "../Button/Button";
import styles from "./Form.module.css";
import { Container } from "react-bootstrap";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { useState } from "react";
import app from "../../utils/firebase.js";

function GridComplexExample() {
    const [formData, setFormData] = useState({
        nome: "",
        endereco: "",
        email: "",
        cidade: "",
        categoria: "",
        cep: "",
    });

    const addInstitution = async (data) => {
        const db = getFirestore(app);
        const docRef = await addDoc(collection(db, "sugestoes"), data);
        return docRef.id;
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const docId = await addInstitution(formData);
            console.log(`Sugestao enviada: ${docId}`);

            setFormData({
                nome: "",
                endereco: "",
                email: "",
                cidade: "",
                categoria: "",
                cep: "",
            });
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <Form onSubmit={handleSubmit} className={styles.formulario}>
            <Container>
                <h6 className="fs-4 fw-bolder text-center">
                    Conhece uma entidade que você deseja cadastrar em nossa
                    plataforma?
                </h6>
                <Row className="formDropdown d-flex align-items-end p-0 mb-3">
                    <Form.Group
                        className="mb-3"
                        as={Col}
                        controlId="formGridName"
                    >
                        <Form.Label className="fs-5 fw-bolder">Nome</Form.Label>
                        <Form.Control
                            className="rounded-pill w-100"
                            type="text"
                            placeholder="Nome da instituição"
                            name="nome"
                            value={formData.nome}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 fs-5 fw-bolder d-grid">
                        <Form.Label column>Categoria*</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                as="select"
                                name="categoria"
                                value={formData.categoria}
                                onChange={handleInputChange}
                                className="categoria "
                                required
                            >
                                <option value="" disabled>
                                    Selecione...
                                </option>
                                <option value="Animais">Animais</option>
                                <option value="Ajuda Humanitária">
                                    Ajuda Humanitária
                                </option>
                                <option value="Educação">Educação</option>
                                <option value="Saúde">Saúde</option>
                                <option value="Meio Ambiente">
                                    Meio Ambiente
                                </option>
                                <option value="Direitos Humanos">
                                    Direitos Humanos
                                </option>
                                <option value="Cultura e Arte">
                                    Cultura e Arte
                                </option>
                                <option value="Desenvolvimento Comunitário">
                                    Desenvolvimento Comunitário
                                </option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Label className="fs-5 fw-bolder">
                        E-mail da Instituição
                    </Form.Label>
                    <Form.Control
                        className=" formStyle rounded-pill w-100"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Digite o email aqui"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress">
                    <Form.Label className=" fs-5 fw-bolder">
                        Endereço da instituição
                    </Form.Label>
                    <Form.Control
                        value={formData.endereco}
                        name="endereco"
                        onChange={handleInputChange}
                        className="formStyle rounded-pill w-100"
                        placeholder="Rua 12, 345, Centro "
                    />
                </Form.Group>

                <Row className="formCep mb-3">
                    <Form.Group
                        className="mb-3"
                        as={Col}
                        controlId="formGridCity"
                    >
                        <Form.Label className="fs-5 fw-bolder">
                            Cidade
                        </Form.Label>
                        <Form.Control
                            name="cidade"
                            value={formData.cidade}
                            onChange={handleInputChange}
                            className="formStyle rounded-pill"
                            placeholder="Ex.: Fortaleza"
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        as={Col}
                        controlId="formGridCep"
                    >
                        <Form.Label className="formStyle fs-5 fw-bolder ">
                            CEP
                        </Form.Label>
                        <Form.Control
                            name="cep"
                            value={formData.cep}
                            onChange={handleInputChange}
                            className="formStyle rounded-pill w-100"
                            placeholder="60.000-100"
                        />
                    </Form.Group>
                </Row>
                <div className="buttonSubmit">
                    <Button type="submit">Cadastrar</Button>
                </div>
            </Container>
        </Form>
    );
}

export default GridComplexExample;
