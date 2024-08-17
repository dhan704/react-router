import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      404, Page not found.
      <div>
        <Link to="/">Go To Home</Link>
      </div>
    </div>
  )
}

export default NotFound
