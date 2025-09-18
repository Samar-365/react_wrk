import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

function PageNotFound() {
    const navigate =useNavigate()
    const returnHome = () =>{
        navigate("/")
    }
  return (
    <div className='pnf container-fluid'>
        <h1>404</h1>
        <h2>oops!.... Page not found!</h2>
        <img src="" alt="" />
        <button type='button' onClick={returnHome} className='btn-outline-secondary'><FaArrowLeft/>Back to home page</button>
    </div>
  )
}

export default PageNotFound
