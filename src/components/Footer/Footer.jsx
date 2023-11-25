import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "./Footer.module.css";
import back from "../../img/back.svg";
import "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
    return (
        <footer className={`${styles.footer}  `}>
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
                className="footerGrid ms-5 d-grid justify-content-around"
            >
                <p className="fs-4 fw-bolder" style={{ color: "black" }}>
                    Links
                </p>
                <ScrollLink
                    // className={`fs-7 fw-normal text-decoration-none`}
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{ cursor: "pointer" }}
                >
                    HOME
                </ScrollLink>
                <ScrollLink
                    // className={`fs-7 fw-normal text-decoration-none`}
                    activeClass="active"
                    to="highlights"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{ cursor: "pointer" }}
                >
                    LISTA DE ONGS
                </ScrollLink>
                <ScrollLink
                    className={`fs-7 fw-normal text-decoration-none`}
                    activeClass="active"
                    to="timeLine"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{ cursor: "pointer", color: "white" }}
                >
                    COMO FUNCIONA
                </ScrollLink>
                <RouterLink
                    className="fs-6 fw-normal text-decoration-none"
                    style={{ color: "white" }}
                    to="/FormNewInst"
                >
                    NOVA INSTITUIÇÃO
                </RouterLink>
            </Nav>
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
