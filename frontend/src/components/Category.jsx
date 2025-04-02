import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';
import Videocard from './Videocard';
import { addCategoryApi, deleteCategoryApi, getAllCategoryApi } from '../services/allApi';
import { toast, ToastContainer } from 'react-toastify';

function Category() {

  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [addCategoryStatus, setAddCategoryStatus] = useState({})
 const [deleteCategoryStatus, setDeleteCategoryStatus]=useState({})


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
    setAddCategoryStatus(result.data)
    }else{
      toast.error("Something went wrong")
      handleReset()
    }
   }else{
    toast.info("Please Add Category Name")
   }
  }

const getAllCategory = async ()=>{
  const result =await getAllCategoryApi()
 // console.log(result);
  if(result.status>=200 && result.status<300){
    setAllCategory(result.data)
  }
  
}
//console.log(allCategory);

const deleteCategory =async (id)=>{
const result = await deleteCategoryApi(id)
console.log(result);
if(result.status >=200 && result.status <300){
  setDeleteCategoryStatus(result.data)
}
}
const videoOver =(e)=>{
  //prevent the reload -dataloss
  e.preventDefault()
}

const videoDrop = (e, categoryDetails)=>{
  console.log(e);
  console.log(categoryDetails);
  const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
  console.log(videoDetails);

if(categoryDetails.allvideos.find((item)=>item.id==videoDetails.id)){
  toast.error('video already in this category')
}else{
  categoryDetails.allvideos.push(videoDetails)
  console.log(categoryDetails);
  
}

}

useEffect(()=>{
  getAllCategory()
},[addCategoryStatus,deleteCategoryStatus])

  return (
    <>
      <h5>Category</h5>
      <button className='btn btn-warning w-100 mt-3' onClick={handleShow}>Add Category</button>

{
  allCategory?.length>0?
allCategory?.map((item,index)=>(
  <Card className='mt-3' style={{ width: '100%' }}>

  <Card.Body className='bg-black'>


    <div className='border border-secondary rounded p-3  d-flex justify-content-between align-items-center' key={index} droppable="true" onDragOver={(e)=>videoOver(e) } onDrop={(e)=>videoDrop(e,item)}>
      <h6>{item?.category}</h6> <Button onClick={()=>deleteCategory(item?.id)} className='ms-5' variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>

    </div>

    <div>

      {/* <Videocard /> */}
    </div>
    
  </Card.Body>
</Card>
))
   :
<p className='text-danger mt-4 text-center'>No category added</p>
}
      





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