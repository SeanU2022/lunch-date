import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolidIcons from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

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
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Control placeholder="date" />
                            </Col>
                            <Col xs={8}>
                                <Form.Control placeholder="meal" />
                            </Col>
                        </Row>


                        <Button variant="secondary" type="submit">
                            save menu
                        </Button>

                    </Form>
                </Modal.Dialog>
            </div>
        </div>
    )
}

export default CreateMenu;

