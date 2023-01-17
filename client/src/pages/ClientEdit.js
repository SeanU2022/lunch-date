import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Login from './LoginTrentan';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolidIcons from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { QUERY_CLIENTS, QUERY_CLIENT } from '../utils/queries';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { UPDATE_CLIENT } from '../utils/mutations';



function ClientEdit() {
    const { data: clientsData } = useQuery(QUERY_CLIENTS);
    const clients = clientsData?.clients || [];

    const [getSelectedClient, { data: clientData }] = useLazyQuery(QUERY_CLIENT);
    const selectedClient = clientData?.client;

    const [updateClient, { error }] = useMutation(UPDATE_CLIENT);

    const [state, setState] = useState({
        name: undefined,
        town: undefined,
        address: undefined
    });


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await updateClient({
                variables: {
                    updateClientId: selectedClient._id,
                    name: state.name,
                    address: state.address,
                    town: state.town

                },
            });


        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (selectedClient) {
            setState(selectedClient)
        }
    }, [selectedClient])

    console.log(state, selectedClient)
    function handleClientClick(clientId) {
        console.log("Selected client", clientId)
        getSelectedClient({
            variables: {
                clientId
            }
        })
    }
    return (
        <div className='background-pink2'>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>


                    <Modal.Body>

                        {/* <h1 id='logo'><FontAwesomeIcon icon={faSolidIcons.faUtensils} /></h1> */}
                        <h2> edit client</h2>
                    </Modal.Body>
                    <Dropdown id="dropdown">
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            select client
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {clients.map(client => <Dropdown.Item href="#" onClick={() => handleClientClick(client._id)}>{client.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    {selectedClient &&
                        <Form onSubmit={handleFormSubmit}>
                            <Row>

                                <Col>
                                    <Form.Control placeholder="name" value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} />
                                </Col>
                                <Col xs={6}>
                                    <Form.Control placeholder="town" value={state.town} onChange={(e) => setState({ ...state, town: e.target.value })} />
                                </Col>
                            </Row>

                            <Form.Group id="address">

                                <Form.Control placeholder="address" value={state.address} onChange={(e) => setState({ ...state, address: e.target.value })} />
                            </Form.Group>
                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                            <Button variant="secondary" type="submit">
                                Save
                            </Button>
                        </Form>
                    }

                </Modal.Dialog>
            </div>
        </div>
    )
}

export default ClientEdit;

