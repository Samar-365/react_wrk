import React from 'react';
import { useNavigate } from 'react-router-dom';

function Data() {
    const navigate = useNavigate();
    const moveLogin = () => {
        navigate("./components/Login");
    };
  return (
    <button onClick={moveLogin}>Login</button>
  )
}

export default Data;
