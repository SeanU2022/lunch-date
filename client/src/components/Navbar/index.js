import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolidIcons from '@fortawesome/free-solid-svg-icons'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function NavTop() {
    return (
        <Navbar>
            <Container id="navbar">
                <Navbar.Brand href="#home"><h2 id="nav-logo"><FontAwesomeIcon icon={faSolidIcons.faUtensils} /> lunchDate</h2></Navbar.Brand>
                <Nav.Link href="#home">add client</Nav.Link>
                <Nav.Link href="#home">edit client</Nav.Link>
                <Nav.Link href="#home">client order</Nav.Link>
                <Nav.Link href="#home">menu editor</Nav.Link>
                <NavDropdown title="view" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">All towns</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                        Tumut (red)
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action5">
                        Tumut (blue)
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action6">
                        Gundagai
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action7">
                        Batlow
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action8">
                        Adelong
                    </NavDropdown.Item>
                </NavDropdown>
                {/* <Button variant="secondary" type="submit"> */}
                <Nav.Link href="#home">login</Nav.Link>
                {/* </Button> */}

                {/* <Navbar.Toggle /> */}
                <Navbar.Collapse className="justify-content-end">

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavTop; 