import { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import app from "../../utils/firebase.js";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import styles from "./FormDb.module.css";
import { readAndCompressImage } from "browser-image-resizer";

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

    const addInstitution = async (data) => {
        const db = getFirestore(app);
        const docRef = await addDoc(collection(db, "instituicoes"), data);
        return docRef.id;
    };

    const uploadImage = async (imageFile, nomeInstituicao) => {
        if (!imageFile) return null;

        // Gera novo nome de imagem
        const fileExtension = imageFile.name.split(".").pop();
        const imageName = `${nomeInstituicao
            .toLowerCase()
            .replace(/\s/g, "-")}-${Date.now()}.${fileExtension}`;

        // Redimenciona imagem
        const resizedImage = await readAndCompressImage(imageFile, {
            quality: 0.7,
            maxWidth: 600,
            maxHeight: 600,
            autoRotate: true,
        });

        const storage = getStorage(app);
        const storageRef = ref(storage, `images/${imageName}`);
        await uploadBytes(storageRef, resizedImage);
        return getDownloadURL(storageRef);
    };

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log("Tentando enviar imagem...");
            const imageUrl = await uploadImage(
                formData.imagem,
                formData.nomeInstituicao
            );
            console.log(`Imagem hospedada no link: ${imageUrl}`);
            const dadosInstituicao = {
                ...formData,
                imagem: imageUrl,
            };
            const docId = await addInstitution(dadosInstituicao);
            console.log(`Documento criado com id: ${docId}`);

            setFormData({
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
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className={styles.formDb}>
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
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Telefone
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                name="telefone"
                                value={formData.telefone}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Website
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                name="website"
                                value={formData.website}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Instagram
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                name="instagram"
                                value={formData.instagram}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Twitter
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                name="twitter"
                                value={formData.twitter}
                                onChange={handleInputChange}
                            />
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
        </div>
    );
}

export default FormDb;
