import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';
import Videocard from './Videocard';

function Category() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <h5>Category</h5>
    <button className='btn btn-warning w-100 mt-3'  onClick={handleShow}>Add Category</button>

    <Card className='mt-3' style={{ width: '100%' }}>
      
      <Card.Body className='bg-black'>
        <Card.Text className='border border-secondary rounded p-3  d-flex justify-content-between align-items-center'>
          Tamil songs <Button className='ms-5' variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>
       
        </Card.Text>
        <div>
        <Videocard/>
       </div>
        {/* <Card.Text className='border border-secondary rounded p-3 d-flex justify-content-between align-items-center'>
          Tamil songs <Button className='ms-5' variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>
        </Card.Text> */}
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='m-2'>
          <form className='border border-secondary rounded p-4'>
          <input type="text" placeholder='Enter Category Name' className='form-control' />
          </form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Category