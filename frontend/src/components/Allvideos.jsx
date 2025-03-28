import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { allVideosApi } from '../services/allApi'

function Allvideos({addVideoStatus}) {

const [allVideo, setAllVideo] = useState([])
const [deleteVideoStatus, setDeleteVideoStatus] = useState({})

const getAllVideo = async()=>{
  const result = await allVideosApi()
 // console.log(result);
 if(result.status>=200 && result.status<300){
  setAllVideo(result.data)
 }
  
}

//console.log(allVideo);

useEffect(()=>{
  getAllVideo()
},[addVideoStatus ,deleteVideoStatus])

  return (
    <>
    <h5>All Videos</h5>
    <div className="container-fluid mt-5">
<div className="row">
  {
    allVideo?.length > 0 ?
allVideo?.map((item , index) => (
  <div className="col-md-3 p-2" key={index}>
        <Videocard video={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
    </div> 
)):
    <div className='d-flex justify-content-center align-items-center flex-column'>
<img src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png" alt="No Image" />
<h5 className='text-danger'>No Videos Added Yet</h5>
    </div>
  }
    
    
</div>
    </div>
    </>
  )
}

export default Allvideos

// my view page is the Allvideos