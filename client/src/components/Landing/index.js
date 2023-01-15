import React from 'react'
import Button from 'react-bootstrap/Button';
import Login from '../../pages/LoginTrentan'
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolidIcons from '@fortawesome/free-solid-svg-icons'
import CurrentDate from '../CurrentDate';

function Landing() {
    return (
        <div className='background-aqua'>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    {/* <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header> */}

                    <Modal.Body>

                        <h1 id='logo'><FontAwesomeIcon icon={faSolidIcons.faUtensils} /></h1>
                        <CurrentDate />
                        <br></br>
                        <hr></hr>
                        <h2 className='meal-description'><strong>roast beef and vegetables</strong></h2>

                        <hr></hr>
                        <br></br>

                        <h2 id="total">57</h2>
                        <br></br>
                        <hr></hr>

                        <h4 className='town'>Tumut (red) <strong>17</strong></h4>
                        <hr></hr>
                        <h4 className='town'>Tumut (blue) <strong>12</strong></h4>
                        <hr></hr>
                        <h4 className='town'>Gundagai <strong>14</strong></h4>
                        <hr></hr>
                        <h4 className='town'>Batlow <strong>9</strong></h4>
                        <hr></hr>
                        <h4 className='town'>Adelong <strong>5</strong></h4>

                    </Modal.Body>

                    {/* <Modal.Footer> */}

                    {/* <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button> */}
                    {/* </Modal.Footer> */}
                </Modal.Dialog>
            </div>
        </div>
    )
}

export default Landing;