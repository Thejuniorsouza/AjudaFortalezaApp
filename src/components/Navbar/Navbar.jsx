import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'typeface-montserrat';
import styles from "./Navbar.modules.css";



function NavBar() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand bsPrefix="customBrand" href="#home">AjudaFortaleza</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navlinks">
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