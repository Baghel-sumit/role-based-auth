import React from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../data/users.json';
import { Can } from './Abilities';
import './dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/create-user');
    }
  return (
    <div className='dashboard'>
        <table className="container">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email Id</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index)=> (
                    <tr key={user.email+index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <Can I="create" a="user" passthrough>
            {allowed => (
                allowed ? <button onClick={handleClick}>Create New User</button> : null
            )}
        </Can>
        
        {/* {context.can('create', 'user') && 
            <button onClick={handleClick}>Create New User</button>
        } */}
    </div>
  )
}

export default Dashboard;
