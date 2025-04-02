import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Java from './Syllabus/Java';
import Angular from './Syllabus/Angular';
import ReactSyllabus from './Syllabus/ReactSyllabus'
import Python from './Syllabus/python';

function Syllabus() {
  return (
    <>
    <div className='w-100 border border-success p-2'>
<div className='d-flex justify-content-center'>
<Link className='btn btn-dark me-2' to={'/syllabus/java'}>Java</Link>
<Link className='btn btn-dark me-2' to={"/syllabus/python"}>Python</Link>
<Link className='btn btn-dark me-2' to={"/syllabus/angular"}>Angular</Link>
<Link className='btn btn-dark me-2' to={"/syllabus/reactsyllabus"}>ReactSyllabus</Link>

</div>
    </div>
    

<div className='border border-info m-3'>
<Routes>
    <Route path='java' element={<Java/>}></Route>
    <Route path='python' element={<Python/>}></Route>
    <Route path='angular' element={<Angular/>}></Route>
    <Route path='reactsyllabus' element={<ReactSyllabus/>}></Route>

</Routes>
</div>
</>

  )
}

export default Syllabus;

