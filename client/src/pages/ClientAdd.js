import React from 'react'
import Button from 'react-bootstrap/Button';
import Login from './LoginTrentan';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolidIcons from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ClientAdd() {
    return (
        <div className='background-pink'>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>


                    <Modal.Body>

                        {/* <h1 id='logo'><FontAwesomeIcon icon={faSolidIcons.faUtensils} /></h1> */}
                        <h2> add client</h2>
                    </Modal.Body>
                    <Dropdown id="dropdown">
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            select town
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Tumut (Red)</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Tumut (Blue)</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Gundagai </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Batlow </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Adelong</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form>
                        <Row>

                            <Col>
                                <Form.Control placeholder="first name" />
                            </Col>
                            <Col xs={6}>
                                <Form.Control placeholder="last name" />
                            </Col>
                        </Row>

                        <Form.Group id="address">

                            <Form.Control placeholder="address" />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                        <Button variant="secondary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Dialog>
            </div>
        </div>
    )
}

export default ClientAdd;

