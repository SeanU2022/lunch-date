import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_MEALS } from '../utils/queries';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolidIcons from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';

// function Order() {
//     return (
//         <div className='background-orange'>
//             <div
//                 className="modal show"
//                 style={{ display: 'block', position: 'initial' }}
//             >
//                 <Modal.Dialog>
//                     {/* <Modal.Header closeButton>
//                         <Modal.Title>Modal title</Modal.Title>
//                     </Modal.Header> */}

//                     <Modal.Body>

//                         {/* <h1 id='logo'><FontAwesomeIcon icon={faSolidIcons.faUtensils} /></h1> */}
//                         <h2>client order</h2>
//                         <h1>Jan 2023</h1>
//                         <Dropdown>
//                             <Dropdown.Toggle variant="secondary" id="dropdown-basic">
//                                 select client
//                             </Dropdown.Toggle>

//                             <Dropdown.Menu>
//                                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//                                 <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//                                 <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//                             </Dropdown.Menu>
//                         </Dropdown>
//                     </Modal.Body>

//                     <Form>
//                         <InputGroup className="mb-3">
//                             <InputGroup.Text id="basic-addon1">01 Jan Sausages and vegetables</InputGroup.Text>
//                             <Form.Control
//                                 placeholder="meal"
//                                 aria-label="meal"
//                                 aria-describedby="basic-addon1"
//                             />
//                         </InputGroup>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Form.Control placeholder="date" />
//                             </Col>
//                             <Col xs={6}>
//                                 <Form.Control placeholder="meal" />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="0" />
//                             </Col>
//                         </Row>



//                         <Button variant="secondary" type="submit">
//                             submit order
//                         </Button>

//                     </Form>
//                 </Modal.Dialog>
//             </div>
//         </div>
//     )
// }


function Order() {
    const { data: mealsData } = useQuery(GET_MEALS);
    const meals = mealsData?.meals || [];
    const [formData, setFormData] = useState({
        name: undefined,
        vegetarian: undefined,
        servings: undefined
    });


    return (
        <div className='background-orange'>
            {meals.map((meal) =>
                // <div key={meal._id}>
                <div>

                    <label> Meal:
                        {/* <input type="text" value={`meal-${meal._id}-name`} readonly /> */}
                        {meal.name}
                    </label>
                </div>
            )}
        </div>
    )
}
export default Order;

