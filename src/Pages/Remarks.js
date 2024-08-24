import React from 'react'
import {useOutletContext} from 'react-router-dom'

function Remarks() {
    const remarks=useOutletContext()
    console.log("remarks--->", remarks.remarks);

  return (
    <div>
      {remarks.remarks}
    </div>
  )
}

export default Remarks
