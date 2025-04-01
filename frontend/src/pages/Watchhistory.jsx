import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVideoHistory, VideoHistoryApi } from '../services/allApi'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function Watchhistory() {
const [watchHistory,setWatchHistory]=useState([])
const [deleteStatus, setDeleteStatus]= useState({})

  const getWatchHistory = async ()=>{
   let result = await VideoHistoryApi()
  //  console.log(result.data);
    if(result.status>=200 && result.status<300){
      setWatchHistory(result.data)
     }
    
  }
 // console.log(watchHistory);
  
const deleteVideo = async(id)=>{
  const result = await deleteVideoHistory(id)
  console.log(result);
  if(result.status >=200 && result.status <300){
    setDeleteStatus(result.data)
  }
  
}


  useEffect(()=>{
    getWatchHistory()
  },[deleteStatus])

  return (
    <>
      <div className="container d-flex justify-content-between align-items-center mt-5">
        <h5>Watch History</h5>
<Link to={'/home'} style={{textDecoration:'none'}}>
          <h5 className='d-flex justify-content-center align-items-center'><span className='d-none d-md-flex fs-5 me-3'>Back Home</span> <FontAwesomeIcon icon={faHouse} className='me-4' /></h5>
  
</Link>      
</div>

      <div className="container mt-5 table-responsive">
        {
          watchHistory?.length>0?<table className='table table-bordered'>
          <thead>
            <tr>
              <th className='p-3 text-center'>Sl.No</th>
              <th className='p-3 text-center'>Caption</th>
              <th className='p-3 text-center'>Url</th>
              <th className='p-3 text-center'>TimeStamp</th>
              <th className='p-3 text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
          watchHistory?.map((item, index)=>(
<tr key={index}>
              <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td><Link to={`${item?.url}`} target='_blank'>{item?.url}</Link></td>
              <td>{item?.time}</td>
              <td><button onClick={()=>deleteVideo(item?.id)} className='btn btn-danger ms-3'><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>
          ))

              
            }
            
          </tbody>
        </table> :  <h4 className='text-danger text-center mt-5'>history cleared</h4>
          }
      </div>
    </>
  )
 
}

export default Watchhistory