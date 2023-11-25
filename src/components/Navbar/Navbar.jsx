import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.modules.css";
// import styles from "./Navbar.modules.css";
import back from "../../img/back.svg";
import { useState, useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom"; // Renomeando o Link do React Router DOM
import { Link as ScrollLink } from "react-scroll"; // Renomeando o Link do React Scroll

// import { NavHashLink } from "react-router-hash-link";

function NavBar() {
    const [navBackground, setNavBackground] = useState(false);
    const navRef = useRef();
    navRef.current = navBackground;
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50;
            if (navRef.current !== show) {
                setNavBackground(show);
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // AQUI EU ESTOU COMEÇANDO =====================>

    return (
        <Navbar
            expand="lg"
            style={{
                transition: "0.3s ease",
                backgroundColor: navBackground ? "#80d0c7" : "transparent",
            }}
            className={`navcontainer sticky-top gap-3 px-3`}
        >
            <Container>
                <ScrollLink
                    className="text-decoration-none"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{ cursor: "pointer" }}
                >
                    <Navbar.Brand className="navbarBrand d-flex align-items-sm-baseline">
                        <img src={back} alt="logo" className="me-2"></img>
                        <h4
                            className="titleBrand fs-2 fw-bolder "
                            style={{ color: "black" }}
                        >
                            AjudaFortaleza
                        </h4>
                    </Navbar.Brand>
                </ScrollLink>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        bsPrefix="navcontainer"
                        className="flex-grow-1 justify-content-evenly"
                    >
                        <ScrollLink
                            className={`fs-7 fw-normal text-decoration-none`}
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
                            className={`fs-7 fw-normal text-decoration-none`}
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
                            style={{ cursor: "pointer" }}
                        >
                            COMO FUNCIONA
                        </ScrollLink>
                        <RouterLink
                            className={`fs-7 fw-normal text-decoration-none`}
                            to="/AddOng"
                            style={{ cursor: "pointer" }}
                        >
                            ADICIONE UMA ONG
                        </RouterLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
