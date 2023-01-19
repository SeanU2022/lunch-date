import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolidIcons from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputGroup from 'react-bootstrap/InputGroup';




function CreateMenu() {
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
                        <h2>menu editor</h2>
                    </Modal.Body>

                    <Form>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">01 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">02 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">03 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">06 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">07 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">08 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>         <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">09 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>         <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">10 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>         <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">13 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>         <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">14 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">15 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">16 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">17 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">20 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">21 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">22 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>         <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">23 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">24 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">27 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">28 Feb</InputGroup.Text>
                            <Form.Control
                                placeholder="meal"
                                aria-label="meal"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>


                        <Button variant="secondary" type="submit">
                            save menu
                        </Button>

                    </Form>
                </Modal.Dialog>
            </div>
        </div >
    )
}

export default CreateMenu;

