import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.modules.css"
// import styles from "./Navbar.modules.css";
import back from "../../img/back.svg"
import { useState, useEffect, useRef } from 'react';

function NavBar() {
  const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])

  return (
    <Navbar expand="lg" style={{ transition: '0.3s ease',backgroundColor: navBackground ?  '#80d0c7' : 'transparent'}} className={`navcontainer sticky-top gap-3 px-3`}>
      <Container>
      <Navbar.Brand className="navbarBrand d-flex align-items-sm-baseline" href="index.html">
         <img src={back} alt='logo' className='me-2'></img>
         <h4 className="titleBrand fs-2 fw-bolder " style={{ color: 'black' }}>AjudaFortaleza</h4>
      </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse  id="basic-navbar-nav">
         <Nav bsPrefix='navcontainer' className="flex-grow-1 justify-content-evenly" >
             <Nav.Link className= "fs-7 fw-normal"  href="#home">HOME</Nav.Link>
             <Nav.Link className={`fs-7 fw-normal`}  href="#linkListaDeOngs">LISTA DE ONGS</Nav.Link>
             <Nav.Link className={`fs-7 fw-normal`}  href="#linkComoFunciona">COMO FUNCIONA</Nav.Link>
             <Nav.Link className={`fs-7 fw-normal`}  href="#link">LINKS</Nav.Link>
             <Nav.Link className={`fs-7 fw-normal`}  href="#link">ADICIONE UMA ONG</Nav.Link>       
          </Nav>
         </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

// function NavBar() {

//   const [ fix, setFix ] = useState(false)

//   function setFixed() {
//     if (window.scrollY >= 392) {
//       setFix(true)
//     } else {
//       setFix(false)
//     }
//   }

//     window.addEventListener("scroll", setFixed)

//   return (
    
//     <Navbar expand="lg" className="`${styles.navbar}` bg-body-tertiary gap-3 px-3">
//       <Container>
//       <Navbar.Brand className="navbarBrand" href="index.html">
//         <img src={back} alt='logo'></img>
//         <h4 className="titleBrand" style={{ color: 'black' }}>AjudaFortaleza</h4>
//       </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse  id="basic-navbar-nav">
//           <Nav bsPrefix='navcontainer' className="flex-grow-1 justify-content-evenly" >
//             <Nav.Link className={styles.navbar}  href="#home">HOME</Nav.Link>
//             <Nav.Link className={styles.navbar}  href="#linkListaDeOngs">LISTA DE ONGS</Nav.Link>
//             <Nav.Link className={styles.navbar}  href="#linkComoFunciona">COMO FUNCIONA</Nav.Link>
//             <Nav.Link className={styles.navbar}  href="#link">LINKS</Nav.Link>

//             <NavDropdown title="DROPDOWN" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

