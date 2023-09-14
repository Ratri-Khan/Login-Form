import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const {user ,logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error =>  console.log(error))

    }
    return (
        <div>
            <div className="py-4 bg-purple-500 text-white text-center font-bold">
                <Link className='ml-3' to='/'>Home</Link>
                <Link className='ml-3' to='/login'>Login</Link>
                <Link className='ml-3' to='/register'>Register</Link>
                <Link className='ml-3' to='/orders'>Orders</Link>
                {
                    user ? 
                    <><span className='ml-3'>{user.email}</span> 
                    <a className='ml-3 pointer' onClick={handleLogOut}> Logout </a></> :
                    <Link className='ml-3' to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;