import React from 'react'
import Button from 'react-bootstrap/Button';
import Login from './Logintj';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolidIcons from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';

function Client() {
    return (
        <div className='background'>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    {/* <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header> */}

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
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>first name</Form.Label>
                            <Form.Control type="text" placeholder="enter first name" />
                            {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>last name</Form.Label>
                            <Form.Control type="text" placeholder="enter last name" />
                            {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>address</Form.Label>
                            <Form.Control type="text" placeholder="enter client's address" />
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

export default Client;

