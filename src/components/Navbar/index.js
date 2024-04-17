import { Link } from "react-router-dom";
import styles from '../../Styles.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
    <Navbar expand="md" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="./">ALLURE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={styles.navbarmenu} id="basic-navbar-nav">
          <div className={styles.navbarmenu}> 
            <Nav >
            <Nav.Link href='./'>Home</Nav.Link>
            <Nav.Link href='/contactus'>Contact us</Nav.Link>
            {/* 
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
            */}
            
          </Nav>
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header;
