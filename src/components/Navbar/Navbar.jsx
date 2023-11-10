import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "./Navbar.modules.css";
import back from "../../img/back.svg"



function NavBar() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary gap-3 px-3">
      <Container>
      <a className="navbar-brand" href="index.html">
        <img src={back} alt='logo'></img>
        <Navbar.Brand bsPrefix="customBrand" style={{ color: 'black' }} href="#home">AjudaFortaleza</Navbar.Brand>
      </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav bsPrefix='navcontainer' className="flex-grow-1 justify-content-evenly" >
            <Nav.Link className={styles.navbar}  href="#home">HOME</Nav.Link>
            <Nav.Link className={styles.navbar}  href="#linkListaDeOngs">LISTA DE ONGS</Nav.Link>
            <Nav.Link className={styles.navbar}  href="#linkComoFunciona">COMO FUNCIONA</Nav.Link>
            <Nav.Link className={styles.navbar}  href="#link">LINKS</Nav.Link>

            <NavDropdown title="DROPDOWN" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;