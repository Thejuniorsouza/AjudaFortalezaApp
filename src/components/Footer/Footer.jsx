
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from "./Footer.module.css";
import back from "../../img/back.svg"


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Navbar.Brand className="navbar-brand" href="index.html">
                <img src={back} alt='logo'></img>
                <h4 className="titleBrand" style={{ color: 'black' }}>AjudaFortaleza</h4>
            </Navbar.Brand>
            <Nav bsPrefix='footerlinks' className="flex-grow-1 justify-content-evenly" >
            <p className="textinformation" style={{ color: 'black' }}>Links</p>
            <Nav.Link className={styles.navbar}  href="#home">HOME</Nav.Link>
            <Nav.Link className={styles.navbar}  href="#linkListaDeOngs">LISTA DE ONGS</Nav.Link>
            <Nav.Link className={styles.navbar}  href="#linkComoFunciona">COMO FUNCIONA</Nav.Link>
            <Nav.Link className={styles.navbar}  href="#link">LINKS</Nav.Link>
            </Nav>
            <Nav bsPrefix='footerlinks' className="flex-grow-1 justify-content-evenly" >
                <p style={{ color: 'black' }}>Informações</p>
            <Nav.Link className={styles.navbar}  href="#contato">(85)9.9999-9999</Nav.Link>
            <Nav.Link className={styles.navbar}  href="#linkListaDeOngs">ajudafortaleza@gmail.com</Nav.Link>
            </Nav>
            <span>© 2023 AjudaFortaleza. Todos os direitos reservados.</span>
        </footer>        
    );
};

export default Footer;
