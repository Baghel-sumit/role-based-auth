import React from 'react';
import './create-user.css';

const CreateUser = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className='create-user'>
        <form onSubmit={handleSubmit}>
            <div className="container">
              <h1>Register</h1>
              <p>Please fill in this form to create an account.</p>
              <hr/>

              <label htmlFor="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" id="email" required/>

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

              <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
              <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
              <hr/>

              <button type="submit" className="registerbtn">Register</button>
            </div>
        </form>

    </div>
  )
}

export default CreateUser
