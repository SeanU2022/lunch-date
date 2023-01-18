import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

// import { ADD_THOUGHT} from '../utils/mutations';
// import { QUERY_THOUGHTS, QUERY_ME } from '../utils/queries';

import { QUERY_MEALS } from '../utils/queries';

import Auth from '../utils/auth';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolidIcons from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// import clientSeeds from '../../../src/server/seeders/clientSeedsReact';
import clientSeeds from '../seeders/clientSeedsReact'

const MealListForm = () => {

    const [rows, setRows] = useState(mealSeeds)

    const Row = (props) => {
        const {name, address, town} = props
        return(<tr>
                    <td>{name}</td>
                    <td>{address}</td>
                    <td>{town}</td>
                </tr>)
    }

    const Table = (props) => {
        const {data} = props
        console.log(data)
        return (
            <table>
                <tbody>
                    {/* // eslint-disable-next-line array-callback-return */}
                    {/* {data.map(row => {
                        return(
                            <Row name = {row.name}
                            address = {row.address}
                            town = {row.town}
                            />
                        )
                        })} */}
                        {/* better code here with no arrow brackets */}
                        {data.map( (row, index) => 
                            <Row key = {`key-${index}`}
                            name = {row.name}
                            address = {row.address}
                            town = {row.town}
                            />
                        )}
                </tbody>
            </table>
        )
    }    






    // const [thoughtText, setThoughtText] = useState('');
    const [nameText, setNameText] = useState('');
    const [addressText, setAddressText] = useState('');
    const [townText, setTownText] = useState('');

    const [addClient, { error }] = useMutation(ADD_CLIENT, {
        update(cache, { data: { addClient } }) {
            try {
                const { client } = cache.readQuery({ query: QUERY_CLIENT });

                cache.writeQuery({ query: QUERY_CLIENT, data: client });

                console.log('1')
                console.log(client)

            } catch (e) {
                console.error(e);
            }

        }
    });

    // const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    //   update(cache, { data: { addThought } }) {
    //     try {
    //       const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

    //       cache.writeQuery({
    //         query: QUERY_THOUGHTS,
    //         data: { thoughts: [addThought, ...thoughts] },
    //       });
    //     } catch (e) {
    //       console.error(e);
    //     }

    //     // update me object's cache
    //     const { me } = cache.readQuery({ query: QUERY_ME });
    //     cache.writeQuery({
    //       query: QUERY_ME,
    //       data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
    //     });
    //   },
    // });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log('1-2')
        console.log(nameText)
        console.log(addressText)
        console.log(townText)
        try {
            const { data } = await addClient({
                variables: {
                    name: nameText,
                    address: addressText,
                    town: townText,

                },
            });
            console.log('2')
            console.log(nameText)
            console.log(addressText)
            console.log(townText)

            setNameText('');
            setAddressText('');
            setTownText('');
        } catch (err) {
            console.error(err);
        }
    };

    // const handleFormSubmit = async (event) => {
    //   event.preventDefault();

    //   try {
    //     const { data } = await addThought({
    //       variables: {
    //         thoughtText,
    //         thoughtAuthor: Auth.getProfile().data.username,
    //       },
    //     });

    //     setThoughtText('');
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'nameText' && value.length <= 60) {
            setNameText(value);
            // setCharacterCount(value.length);
        }

        if (name === 'addressText') {
            setAddressText(value);
            // setCharacterCount(value.length);
        }
        if (name === 'townText') {
            setTownText(value);
            // setCharacterCount(value.length);
        }

        console.log('3')
        console.log(name)
        console.log(value)

    };

    // const handleChange = (event) => {
    //   const { name, value } = event.target;

    //   if (name === 'thoughtText' && value.length <= 280) {
    //     setThoughtText(value);
    //     setCharacterCount(value.length);
    //   }
    // };

    return (
        <div>
            {Auth.loggedIn() ? (
                <>
                    <div>
                        <div>Table: Clients</div>
                        <Table data = {rows} />
                    </div>

                    <div
                        className="flex-row justify-center justify-space-between-md align-center"
                    // onSubmit={handleFormSubmit}
                    >
                        <div className='background-pink'>
                            <div
                                className="modal show"
                                style={{ display: 'block', position: 'initial' }}
                            >
                                {/* <div className="col-12 col-lg-9">
                          <input
                            name="thoughtAuthor"
                            placeholder="Add your name to get credit for the thought..."
                            value={formState.thoughtAuthor}
                            className="form-input w-100"
                            onChange={handleChange}
                          />
                        </div> */}
                                <Modal.Dialog>
                                    <Modal.Body>
                                        {/* <h1 id='logo'><FontAwesomeIcon icon={faSolidIcons.faUtensils} /></h1> */}
                                        <h2>add client</h2>
                                    </Modal.Body>
                                    <h5>select town</h5>
                                    <Row>
                                        {/* <TownSelector
                                            placeholder="select town"
                                            name="townText"
                                            value={townText}
                                            onChange={handleChange}
                                        /> */}
                                    </Row>
                                    {/* <Dropdown
                                        id="dropdown"
                                        name="townText"
                                        value={townText}
                                        onChange={handleChange}
                                    >
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
                                    </Dropdown> */}
                                    <Form onSubmit={handleFormSubmit}>
                                        <Row>
                                            <Col>

                                                <div id="town-select">
                                                    <Form.Select id="disabledSelect"
                                                        type='select'
                                                        name='townText'
                                                        value={townText}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="Tumut Red">Tumut (red)</option>
                                                        <option value="Tumut Blue">Tumut (blue)</option>
                                                        <option value="Gundagai">Gundagai</option>
                                                        <option value="Batlow">Batlow</option>
                                                        <option value="Adelong">Adelong</option>
                                                    </Form.Select>

                                                    {/* <p>{message}</p> */}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Control
                                                    placeholder="name"
                                                    name="nameText"
                                                    value={nameText}
                                                    onChange={handleChange}
                                                />
                                            </Col>
                                            {/* <Col xs={6}>
                                  <Form.Control placeholder="last name" />
                              </Col> */}
                                        </Row>

                                        <Form.Group id="address">
                                            <Form.Control
                                                placeholder="address"
                                                name="addressText"
                                                value={addressText}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group> */}
                                        <Button
                                            // variant="secondary" 
                                            type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </Modal.Dialog>
                            </div>
                        </div>
                        {error && (
                            <div className="col-12 my-3 bg-danger text-white p-3">
                                {error.message}
                            </div>
                        )}
                    </div>
                    {/* <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="thoughtText"
                placeholder="Here's a new thought..."
                value={thoughtText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Thought
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form> */}
                </>
            ) : (
                <p>
                    You need to be logged in to add a client. Please{' '}
                    <Link to="/login">login</Link>
                </p>
            )}
        </div>
    );
};

export default MealListForm;
