import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';
import Videocard from './Videocard';
import { addCategoryApi } from '../services/allApi';
import { toast, ToastContainer } from 'react-toastify';

function Category() {

  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")



  const handleClose = () =>{
    setShow(false);
    handleReset()
  } 
   
  
  const handleShow = () => setShow(true);

  console.log(categoryName);
  
const handleReset = ()=>{
  setCategoryName("")
}

  const addNewCategory = async () => {
   if(categoryName){
    const reqBody = {
      category: categoryName,
      allvideos: []
    }
    const result = await addCategoryApi(reqBody)
    console.log(result);
    if(result.status>=200 && result.status <300){
    toast.success("Category added Successfully")
    handleClose()
    }else{
      toast.error("Something went wrong")
      handleReset()
    }
   }else{
    toast.info("Please Add Category Name")
   }
  }

  return (
    <>
      <h5>Category</h5>
      <button className='btn btn-warning w-100 mt-3' onClick={handleShow}>Add Category</button>

      <Card className='mt-3' style={{ width: '100%' }}>

        <Card.Body className='bg-black'>


          <div className='border border-secondary rounded p-3  d-flex justify-content-between align-items-center'>
            Tamil songs <Button className='ms-5' variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>

          </div>

          <div>

            {/* <Videocard /> */}
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
            <input value={categoryName} type="text" placeholder='Enter Category Name' className='form-control' onChange={(e)=>setCategoryName(e.target.value)} />
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="warning" onClick={addNewCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
<ToastContainer position='top-center' theme="colored" autoClose={2000}/>
    </>
  )
}

export default Category