import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { videoAddApi } from '../services/allApi';
import { toast, ToastContainer } from 'react-toastify';

function Add({setAddVideoStatus}) {  //destructuring 

    const [show, setShow] = useState(false);
    const [videoDetails, setvideoDetails] = useState({
        caption: "",
        image: "",
        embedLink: ""
    })
    const handleClose = () => {setShow(false);
        handleReset()
    }
    const handleShow = () => setShow(true);

    const handleReset = ()=>{
        setvideoDetails({
        caption: "",
        image: "",
        embedLink: ""
        })
    }
console.log(videoDetails);

const handleUpload = async()=>{
    const {caption,image,embedLink} = videoDetails  // object destructuring
    if(!caption || !image || !embedLink){
        alert('Please fill the filed completely')
    } else{
        //api
//https://youtu.be/DFZ6eram8Fo?si=Jz9wm0RDrSxmTSnh
if(embedLink.startsWith('https://youtu.be')){
    let link =`https://www.youtube.com/embed/${embedLink.slice(17,28)}`
    console.log(link);
    const result = await videoAddApi({caption,image,embedLink:link})
        console.log(result);

        if(result.status >=200 && result.status<300){
         toast.success('Video added Successfully')
            handleClose()
            setAddVideoStatus(result.data)
        }
        else{
            toast.danger('Something went wrong')
            handleReset()
        }
    
}else{
    //https://www.youtube.com/watch?v=DFZ6eram8Fo
    let link = `https://www.youtube.com/embed/${embedLink.slice(-11)}`  //incase time added at end of link -use slice based on =
    console.log(link);
    const result = await videoAddApi({caption,image,embedLink:link})
        console.log(result);
        if(result.status >=200 && result.status<300){
            toast.success('Video added Successfully')
            handleClose()
            setAddVideoStatus(result.data)
        }
        else{
            toast.danger('Something went wrong')
            handleReset()
        }
    
}

        //<iframe width="640" height="360" src="https://www.youtube.com/embed/DFZ6eram8Fo" title="Official : Sneham Cherum Neram Video Song | Ohm Shanthi Oshaana | Nivin Pauly, Nazriya Nazim" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
    }
}

    return (
        <>
            <h5 className='d-flex justify-content-center align-items-center'><span className='fs-5 d-none d-md-flex me-2'>Upload New Video </span><FontAwesomeIcon icon={faCloudArrowUp} className='ms-3' onClick={handleShow} /></h5>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-warning'> <FontAwesomeIcon icon={faFilm} className='me-2' />Upload Videos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the following details</p>
                    <form className='border rounded p-3'>
                        <input type="text" placeholder='Video Caption' className='form-control mb-3' value={videoDetails.caption} onChange={(e) => setvideoDetails({...videoDetails,caption: e.target.value}) }/>
                        <input type="text" placeholder='Video Image' className='form-control mb-3' value={videoDetails.image} onChange={(e) => setvideoDetails({...videoDetails,image: e.target.value}) } />
                        <input type="text" placeholder='Video Url' className='form-control' value={videoDetails.embedLink} onChange={(e) => setvideoDetails({...videoDetails,embedLink: e.target.value}) }/>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleReset}>
                        Reset
                    </Button>
                    <Button variant="warning" onClick={handleUpload}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>

<ToastContainer position='top-center' theme="colored" autoClose={2000}/>
        </>
    )
}

export default Add