import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    
<nav  className='bg-dark  p-3  d-flex  justify-content-between' >
<h1 className='text-white'>welcome to cjc</h1>

    <div>
          <Link className='btn btn-light  me-4' to={"/home"}>Home</Link>
          <Link className='btn btn-light me-4' to={"/about"}>About</Link>
          <Link className='btn btn-light me-4' to={"/services"}>OurServices</Link>
          <Link className='btn btn-light me-4' to={"/syllabus"}>Syllabus</Link>
          <Link className='btn btn-light me-4' to={"/enquiry"}>Enquiry</Link>
          <Link className='btn btn-light me-4' to={"/signin"}>Login</Link>
    </div>
</nav>
  )
}

export default Header;