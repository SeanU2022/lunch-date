// // import React from 'react'
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';

// import { ADD_CLIENT } from '../utils/mutations';

// import auth from '../utils/auth';

// import Button from 'react-bootstrap/Button';
// import Login from './LoginTrentan';
// import Modal from 'react-bootstrap/Modal';
// import Dropdown from 'react-bootstrap/Dropdown';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import * as faSolidIcons from '@fortawesome/free-solid-svg-icons'
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';

// const ClientAdd = () => {

//     const [addClient, { error }] = useMutation(ADD_CLIENT, {
//         update(cache, { data: { addClient } }) {
//         //   try {
//         //     // const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });
    
//         //     cache.writeQuery({
//         //       query: QUERY_CLIENTS,
//         //       data: { clients: [addClient, ...clients] },
//         //     });
//         //   } catch (e) {
//         //     console.error(e);
//         //   }
    
//         //   // update me object's cache
//         //   const { me } = cache.readQuery({ query: QUERY_ME });
//         //   cache.writeQuery({
//         //     query: QUERY_ME,
//         //     data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
//         //   });
//         },
//       });

//       const handleFormSubmit = async (event) => {
//         event.preventDefault();
    
//         try {
//           const { data } = await addClient({
//             variables: {
//               name,
//               address,
//               town
//             },
//           });
    
//           setThoughtText('');
//         } catch (err) {
//           console.error(err);
//         }
//       };

//     return (
//         <div className='background-pink'>
//             <div
//                 className="modal show"
//                 style={{ display: 'block', position: 'initial' }}
//             >
//                 <Modal.Dialog>
//                     <Modal.Body>
//                         {/* <h1 id='logo'><FontAwesomeIcon icon={faSolidIcons.faUtensils} /></h1> */}
//                         <h2>add client</h2>
//                     </Modal.Body>
                   
//                     <Form onSubmit={handleFormSubmit}>
//                     <Dropdown id="dropdown">
//                         <Dropdown.Toggle variant="dark" id="dropdown-basic">
//                             select town
//                         </Dropdown.Toggle>

//                         <Dropdown.Menu>
//                             <Dropdown.Item href="#/action-1">Tumut (Red)</Dropdown.Item>
//                             <Dropdown.Item href="#/action-2">Tumut (Blue)</Dropdown.Item>
//                             <Dropdown.Item href="#/action-3">Gundagai </Dropdown.Item>
//                             <Dropdown.Item href="#/action-3">Batlow </Dropdown.Item>
//                             <Dropdown.Item href="#/action-3">Adelong</Dropdown.Item>
//                         </Dropdown.Menu>
//                     </Dropdown>
//                         <Row>
//                             <Col>
//                                 <Form.Control placeholder="name" />
//                             </Col>
//                             {/* <Col xs={6}>
//                                 <Form.Control placeholder="last name" />
//                             </Col> */}
//                         </Row>
//                         <Form.Group id="address">
//                             <Form.Control placeholder="address" />
//                         </Form.Group>
//                         {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                         <Form.Check type="checkbox" label="Check me out" />
//                     </Form.Group> */}
//                         <Button variant="secondary" type="submit">
//                             Submit
//                         </Button>
//                     </Form>
//                 </Modal.Dialog>
//             </div>
//         </div>
//     )
// }

// // function ClientAdd() {
// //     return (
// //         <div className='background-pink'>
// //             <div
// //                 className="modal show"
// //                 style={{ display: 'block', position: 'initial' }}
// //             >
// //                 <Modal.Dialog>
// //                     <Modal.Body>
// //                         {/* <h1 id='logo'><FontAwesomeIcon icon={faSolidIcons.faUtensils} /></h1> */}
// //                         <h2>add client</h2>
// //                     </Modal.Body>
// //                     <Dropdown id="dropdown">
// //                         <Dropdown.Toggle variant="dark" id="dropdown-basic">
// //                             select town
// //                         </Dropdown.Toggle>

// //                         <Dropdown.Menu>
// //                             <Dropdown.Item href="#/action-1">Tumut (Red)</Dropdown.Item>
// //                             <Dropdown.Item href="#/action-2">Tumut (Blue)</Dropdown.Item>
// //                             <Dropdown.Item href="#/action-3">Gundagai </Dropdown.Item>
// //                             <Dropdown.Item href="#/action-3">Batlow </Dropdown.Item>
// //                             <Dropdown.Item href="#/action-3">Adelong</Dropdown.Item>
// //                         </Dropdown.Menu>
// //                     </Dropdown>
// //                     <Form>
// //                         <Row>
// //                             <Col>
// //                                 <Form.Control placeholder="name" />
// //                             </Col>
// //                             {/* <Col xs={6}>
// //                                 <Form.Control placeholder="last name" />
// //                             </Col> */}
// //                         </Row>
// //                         <Form.Group id="address">
// //                             <Form.Control placeholder="address" />
// //                         </Form.Group>
// //                         {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
// //                         <Form.Check type="checkbox" label="Check me out" />
// //                     </Form.Group> */}
// //                         <Button variant="secondary" type="submit">
// //                             Submit
// //                         </Button>
// //                     </Form>
// //                 </Modal.Dialog>
// //             </div>
// //         </div>
// //     )
// // }

// export default ClientAdd;


// // const [thoughtText, setThoughtText] = useState('');

// // const [characterCount, setCharacterCount] = useState(0);

// // const [addThought, { error }] = useMutation(ADD_CLIENT, {
// //   update(cache, { data: { addThought } }) {
// //     try {
// //       const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

// //       cache.writeQuery({
// //         query: QUERY_THOUGHTS,
// //         data: { thoughts: [addThought, ...thoughts] },
// //       });
// //     } catch (e) {
// //       console.error(e);
// //     }

// //     // update me object's cache
// //     const { me } = cache.readQuery({ query: QUERY_ME });
// //     cache.writeQuery({
// //       query: QUERY_ME,
// //       data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
// //     });
// //   },
// // });

// // const handleFormSubmit = async (event) => {
// //     event.preventDefault();

    
// //     try {
// //       const { data } = await addClient({
// //         variables: {
// //           thoughtText,
// //           thoughtAuthor: Auth.getProfile().data.username,
// //         },
// //       });

// //       setThoughtText('');
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleChange = (event) => {
// //     const { name, value } = event.target;

// //     if (name === 'thoughtText' && value.length <= 280) {
// //       setThoughtText(value);
// //       setCharacterCount(value.length);
// //     }
// //   };
