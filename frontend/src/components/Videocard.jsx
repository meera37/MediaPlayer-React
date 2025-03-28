import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryApi, deleteVideoApi } from '../services/allApi';


function Videocard({video,setDeleteVideoStatus}) {
 // console.log(video);
  

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const addVideoHistory = async()=>{
    //api
    let caption = video?.caption
    let url = video?.embedLink
    const time = new Date()
  // console.log(time);
    const result = new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time);
  //  console.log(result);
    
    const response = await addVideoHistoryApi({caption,url,time:result}) //caption:caption, key:value
  //  console.log(response);
    
  }
  const handleShow = () => {setShow(true);
    addVideoHistory()
  }

  const deleteVideo = async(id)=>{
    const result = await deleteVideoApi(id)
    //console.log(result);
    if(result.status>=200 && result.status<300){
      setDeleteVideoStatus(result.data)
    }

    
  }

  return (
    <>
    <Card style={{ width: '100%' }}>
      <Card.Img  onClick={handleShow} variant="top" src={video?.image} style={{height:'300px'}}/>
      <Card.Body className='d-flex justify-content-between align-items-center'>
        <Card.Text >{video?.caption}</Card.Text>
        
        <Button variant="danger" ><FontAwesomeIcon icon={faTrashCan} onClick={()=>deleteVideo(video?.id)} /></Button>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="360" src={`${video?.embedLink}?autoplay=1`} title="Official : Sneham Cherum Neram Video Song | Ohm Shanthi Oshaana | Nivin Pauly, Nazriya Nazim" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default Videocard