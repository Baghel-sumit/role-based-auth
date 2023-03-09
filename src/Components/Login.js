import React from 'react';
import { useNavigate } from 'react-router-dom';
import { defineRulesFor } from '../utils/permissions';
import { setLocalStorageKey } from '../utils/localStorage';
import './login.css';

const Login = (props) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userName = e.target.uname.value;
        const role = e.target.role.value;
        if(userName){
            setLocalStorageKey('token', userName);
            const rules = defineRulesFor(role);
            props.ability.update(rules);
            navigate('/');
        }else{
            window.alert("please enter valid values");
        }
    }

  return (
    <div className='login-page'>
      <h2>Login Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>

            <label htmlFor="role"><b>User Role</b></label>
            <input type="text" placeholder="Enter Role" name="role" required/>

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <button type="submit">Login</button>
          </div>
        </form>
    </div>
  )
}

export default Login
