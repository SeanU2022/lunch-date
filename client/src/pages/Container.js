import React from 'react'
import Button from 'react-bootstrap/Button';
import Login from './LoginTrentan';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolidIcons from '@fortawesome/free-solid-svg-icons'

function Container() {
    return (
        <div className='background-aqua'>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>


                    <Modal.Body>

                        <h1 id='logo'><FontAwesomeIcon icon={faSolidIcons.faUtensils} /></h1>
                        <h1> lunchDate</h1>
                    </Modal.Body>


                    {<Login></Login>}

                </Modal.Dialog>
            </div>
        </div>
    )
}

export default Container;