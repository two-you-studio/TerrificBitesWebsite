import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>404 Page not found

      <Link to="/" className='bg-red-500 text-white p-5 m-5'> Go to Home</Link>
    </div>
  )
}

export default PageNotFound