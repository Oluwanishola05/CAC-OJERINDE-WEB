import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import "../Activities/PopRegistration.css"

const PopRegistration = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const success = () => {
       setShow(false)
      alert("Successfully Saved!")
    }

  return (
    <>

         <div className='btns1'>
            <button className='btns2' onClick={handleShow}>
                REGISTER
            </button>
                         
                        
        </div>
      
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>MEMBER REGISTRATION</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
            <form class="row g-3">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Surname</label>
                        <input type="name" class="form-control" id="name" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Firstname</label>
                        <input type="firstname" class="form-control" id="firstname" />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputState" class="form-label">State</label>
                        <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                        </select>
                    </div>

                    <div class="col-md-6">
                        <label for="inputState" class="form-label">Marital Status</label>
                        <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>Married</option>
                        <option>Single</option>
                        </select>
                    </div>

                    <div class="col-md-6">
                        <label for="inputState" class="form-label">Are You Baptized</label>
                        <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>Yes</option>
                        <option>No</option>
                        </select>
                    </div>

                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Former Church Attended</label>
                        <input type="text" class="form-control" id="churchAttended" placeholder="...." />
                    </div>

                    
                    
                   
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={success}>
            SUBMIT
          </Button>
          <Button variant="danger" onClick={handleClose}>
            CANCEL
          </Button>
        </Modal.Footer>
      </Modal>
    </>



  )
}

export default PopRegistration;
