import React from 'react'
import Button from 'react-bootstrap/Button';
import Login from './LoginTrentan';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolidIcons from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table';
import CurrentDate from '../components/CurrentDate';


function Adelong() {
    return (
        <div className='background-purple'>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>


                    <Modal.Body>

                        <h1 id='logo'><FontAwesomeIcon icon={faSolidIcons.faUtensils} /></h1>


                        <CurrentDate />

                        <h1>Adelong</h1>
                        <br></br>
                        <hr></hr>
                        <h2 className='meal-description'>beef stroganoff</h2>
                        <hr></hr>

                        <h2 id="total">5</h2>
                        {/* <hr></hr> */}
                        <br></br>

                        <h3 className='dessert'>dessert = <strong>5</strong></h3>
                        <h3 className='soup'>soup = <strong>2</strong></h3>
                        <br></br>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>

                                    <th colSpan={2}>client name</th>
                                    <th>order</th>
                                    <th>quantity</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td colSpan={2}>Mark Moody</td>
                                    <td>S M D</td>
                                    <td>2</td>

                                </tr>
                                <tr>

                                    <td colSpan={2}>Gif Hardy</td>
                                    <td>M D</td>
                                    <td>1</td>

                                </tr>
                                <tr>

                                    <td colSpan={2}>Apollo Client</td>
                                    <td>M D</td>
                                    <td>1</td>
                                </tr>

                                <tr>

                                    <td colSpan={2}>Reg Pickles</td>
                                    <td>M D</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button id="generate-run" variant="secondary" type="submit">
                            generate run sheet
                        </Button>


                    </Modal.Body>

                </Modal.Dialog>
            </div>
        </div>
    )
}

export default Adelong;