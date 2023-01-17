import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolidIcons from '@fortawesome/free-solid-svg-icons'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


import Auth from '../../utils/auth';


function NavTop() {
    //if user logged in
    // return logged-in-view
    //else
    // display restricted-view

    if (Auth.loggedIn()) {
        return (
            <Navbar>
                <Container id="navbar">
                    <Navbar.Brand href="#home"><h2 id="nav-logo"><FontAwesomeIcon icon={faSolidIcons.faUtensils} /> lunchDate</h2></Navbar.Brand>
                    <Nav.Link href="/addclient">add client <FontAwesomeIcon icon={faSolidIcons.faUserPlus} /></Nav.Link>
                    <Nav.Link href="/editclient">edit client <FontAwesomeIcon icon={faSolidIcons.faUserPen} /></Nav.Link>
                    <Nav.Link href="/listclients">list clients <FontAwesomeIcon icon={faSolidIcons.faUserPen} /></Nav.Link>
                    <Nav.Link href="/clientorder">client order <FontAwesomeIcon icon={faSolidIcons.faPen} /></Nav.Link>
                    <Nav.Link href="/editmenu">menu editor <FontAwesomeIcon icon={faSolidIcons.faPenToSquare} /></Nav.Link>
                    <NavDropdown title="view" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/landing">All towns</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/tumutred">
                            Tumut (red)
                        </NavDropdown.Item>

                        <NavDropdown.Item href="/tumutblue">
                            Tumut (blue)
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/gundagai">
                            Gundagai
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/batlow">
                            Batlow
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/adelong">
                            Adelong
                        </NavDropdown.Item>
                    </NavDropdown>
                    {/* <Button variant="secondary" type="submit"> */}
                    <Nav.Link href="/login" onClick={Auth.logout}>logout <FontAwesomeIcon icon={faSolidIcons.faRightFromBracket} /></Nav.Link>


                    {/* </Button> */}

                    {/* <Navbar.Toggle /> */}
                    <Navbar.Collapse className="justify-content-end">

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
    else {
        return (
            <Navbar>
                <Container id="navbar">
                    <Navbar.Brand href="#home"><h2 id="nav-logo"><FontAwesomeIcon icon={faSolidIcons.faUtensils} /> lunchDate</h2></Navbar.Brand>
                </Container>
            </Navbar>

        )
    }
}
//}
//     <>
//       <Link className="btn btn-lg btn-info m-2" to="/me">
//         {Auth.getProfile().data.username}'s profile
//       </Link>
//       <button className="btn btn-lg btn-light m-2" onClick={logout}>
//         Logout
//       </button>
//     </>
//   ) : (
//     <>
//       <Link className="btn btn-lg btn-info m-2" to="/login">
//         Login
//       </Link>
//       <Link className="btn btn-lg btn-light m-2" to="/signup">
//         Signup
//       </Link>
//     </>
//   )}

export default NavTop; 