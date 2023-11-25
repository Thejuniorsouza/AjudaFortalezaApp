import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "../Button/Button";
import styles from "./Hero.module.css";

const Hero = ({ searchForm, formHandler, handleSubmit }) => {
    return (
        <section
            id="home"
            className={`${styles.hero} d-flex justify-content-center align-items-center`}
        >
            <Container>
                <Row>
                    <Col lg={8} xs={12} className="mx-auto">
                        <h1 className="text-white text-center">
                            Faça a diferença!
                        </h1>
                        <h6 className="text-center">
                            Procure uma ONG ou entidade para conhecer
                        </h6>
                        <Form
                            onSubmit={handleSubmit}
                            className="mt-4 pt-2 mb-lg-0 mb-5"
                            role="search"
                        >
                            <InputGroup
                                className="bg-white rounded-pill p-2"
                                size="lg"
                            >
                                <FormControl
                                    className="shadow-none fs-5 rounded-pill border-0"
                                    name="keyword"
                                    type="search"
                                    id="keyword"
                                    placeholder="Digite aqui"
                                    aria-label="Search"
                                    value={searchForm}
                                    onChange={formHandler}
                                />
                                <Button type="submit">Procurar</Button>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
