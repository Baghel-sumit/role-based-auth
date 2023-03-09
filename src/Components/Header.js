/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { checkLogin } from '../utils/checkLogin';
import { isHeaderVisible } from '../utils/isHeaderVisible';

const style = {
    padding:'5px', 
    backgroundColor: 'gray', 
    color: 'white', 
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '20px'
}

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isHeader, setHeader] = useState(false); 

    useEffect(()=>{
        setHeader(isHeaderVisible(location.pathname));
        checkLogin(location.pathname, navigate);
    },[location.pathname]);

  return (
    isHeader ?
    <div style={style}>
      header component
    </div> : null
  )
}

export default Header;
