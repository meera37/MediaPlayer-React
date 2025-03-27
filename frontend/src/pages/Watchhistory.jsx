import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Watchhistory() {
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center mt-5">
        <h5>Watch History</h5>
<Link to={'/home'} style={{textDecoration:'none'}}>
          <h5 className='d-flex justify-content-center align-items-center'><span className='d-none d-md-flex fs-5 me-3'>Back Home</span> <FontAwesomeIcon icon={faHouse} className='me-4' /></h5>
  
</Link>      
</div>

      <div className="container mt-5 table-responsive">
        <table className='table table-bordered'>
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
            <tr>
              <td>dummy</td>
              <td>dummy</td>
              <td><Link to={''}>dummy</Link></td>
              <td>dummy</td>
              <td>dummy</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Watchhistory