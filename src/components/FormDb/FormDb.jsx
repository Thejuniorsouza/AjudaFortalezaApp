
import { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";

function FormDb() {
    const [formData, setFormData] = useState({
        nomeInstituicao: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "Fortaleza",
        estado: "CE",
        cep: "",
        telefone: "",
        website: "",
        instagram: "",
        twitter: "",
        descricao: "",
        categoria: "",
        imagem: null,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (event) => {
        setFormData({
            ...formData,
            imagem: event.target.files[0],
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                        Nome da Instituição
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            name="nomeInstituicao"
                            value={formData.nomeInstituicao}
                            onChange={handleInputChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                        Rua
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            name="rua"
                            value={formData.rua}
                            onChange={handleInputChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                        Número
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            name="numero"
                            value={formData.numero}
                            onChange={handleInputChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                        Bairro
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            name="bairro"
                            value={formData.bairro}
                            onChange={handleInputChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                        Cidade
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            name="cidade"
                            value={formData.cidade}
                            onChange={handleInputChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                        Estado
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            name="estado"
                            value={formData.estado}
                            onChange={handleInputChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                        CEP
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            name="cep"
                            value={formData.cep}
                            onChange={handleInputChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                        Categoria
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            as="select"
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleInputChange}
                        >
                            <option value="">Selecione...</option>
                            <option value="Animais">Animais</option>
                            <option value="Ajuda Humanitária">
                                Ajuda Humanitária
                            </option>
                            <option value="Educação">Educação</option>
                            <option value="Saúde">Saúde</option>
                            <option value="Meio Ambiente">Meio Ambiente</option>
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

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                        Imagem
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="file"
                            name="imagem"
                            onChange={handleImageChange}
                        />
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </Container>
    );
}

export default FormDb;
