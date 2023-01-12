import React from 'react'
import Button from 'react-bootstrap/Button';
// import Login from './Login';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolidIcons from '@fortawesome/free-solid-svg-icons'

function Landing() {
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


                        <h1> 11 Jan 2023</h1>
                        <h3>roast beef and vegetables</h3>
                        <hr></hr>
                        <h1 id='logo'><FontAwesomeIcon icon={faSolidIcons.faUtensils} /></h1>
                        <h2 id="total">57</h2>
                        <hr></hr>
                        <h4>Tumut red <strong>17</strong></h4>
                        <h4>Tumut blue <strong>12</strong></h4>
                        <h4>Gundagai <strong>14</strong></h4>
                        <h4>Batlow <strong>9</strong></h4>
                        <h4>Adelong <strong>5</strong></h4>

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