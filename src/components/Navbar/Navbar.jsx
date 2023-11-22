import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.modules.css";
// import styles from "./Navbar.modules.css";
import back from "../../img/back.svg";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

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
                <Link className="text-decoration-none" to="/">
                    <Navbar.Brand className="navbarBrand d-flex align-items-sm-baseline">
                        <img src={back} alt="logo" className="me-2"></img>
                        <h4
                            className="titleBrand fs-2 fw-bolder "
                            style={{ color: "black" }}
                        >
                            AjudaFortaleza
                        </h4>
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        bsPrefix="navcontainer"
                        className="flex-grow-1 justify-content-evenly"
                    >
                        <Link
                            className={`fs-7 fw-normal text-decoration-none`}
                            to="/"
                        >
                            HOME
                        </Link>
                        <Link
                            className={`fs-7 fw-normal text-decoration-none`}
                            href="#linkListaDeOngs"
                        >
                            LISTA DE ONGS
                        </Link>
                        <NavHashLink
                            className={`fs-7 fw-normal text-decoration-none`}
                            to="/TimeLine"
                        >
                            COMO FUNCIONA
                        </NavHashLink>
                        <Link
                            className={`fs-7 fw-normal text-decoration-none`}
                            href="#link"
                        >
                            LINKS
                        </Link>
                        <Link
                            className={`fs-7 fw-normal text-decoration-none`}
                            to="/AddOng"
                        >
                            ADICIONE UMA ONG
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
