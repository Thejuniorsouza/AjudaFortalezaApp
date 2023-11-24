import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "./Footer.module.css";
import back from "../../img/back.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={`${styles.footer} `}>
            <Navbar.Brand
                className={`d-flex align-items-sm-baseline justify-content-center`}
                href="index.html"
            >
                <img src={back} alt="logo" className="me-2"></img>
                <h4
                    className="titleBrand fs-2 fw-bolder"
                    style={{ color: "black" }}
                >
                    AjudaFortaleza
                </h4>
            </Navbar.Brand>
            <Nav
                bsPrefix="footerlinks"
                className="flex-grow-1 justify-content-evenly"
            >
                <p className="fs-4 fw-bolder" style={{ color: "black" }}>
                    Links
                </p>
                <Nav.Link className="fs-6 fw-normal" href="#home">
                    HOME
                </Nav.Link>
                <Nav.Link className="fs-6 fw-normal" href="#linkListaDeOngs">
                    LISTA DE ONGS
                </Nav.Link>
                <Nav.Link className="fs-6 fw-normal" href="#linkComoFunciona">
                    COMO FUNCIONA
                </Nav.Link>
                <Nav.Link className="fs-6 fw-normal" href="#link">
                    LINKS
                </Nav.Link>
            </Nav>
            <Link className="fs-6 fw-normal" to="/FormNewInst">
                NOVA INSTITUIÇÃO
            </Link>
            <Nav
                bsPrefix="footerlinks"
                className="flex-grow-1 justify-content-evenly"
            >
                <p className="fs-4 fw-bolder" style={{ color: "black" }}>
                    Informações
                </p>
                <Nav.Link className="fs-6 fw-normal" href="#contato">
                    (85)9.9999-9999
                </Nav.Link>
                <Nav.Link className="fs-6 fw-normal" href="#linkListaDeOngs">
                    ajudafortaleza@gmail.com
                </Nav.Link>
            </Nav>
            <span>© 2023 AjudaFortaleza. Todos os direitos reservados.</span>
        </footer>
    );
};

export default Footer;
