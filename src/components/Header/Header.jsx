import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))

    }
    return (
        <div className="flex justify-between items-center p-3 bg-purple-500 text-white text-center font-bold">
            <div>
                <Link className='ml-3' to='/'>Home</Link>
                <Link className='ml-3' to='/orders'>Orders</Link>
            </div>
            <div>                        
                {
                    user ?
                        <>
                            <img className='ml-3 inline rounded-full w-12 h-12' src={user.photoURL}></img>
                            <a className='ml-3 cursor-pointer' onClick={handleLogOut}> Logout </a>
                        </> :
                        <> 
                            <Link className='ml-3' to='/register'>Register</Link>

                            <Link className='ml-3' to='/login'>Login</Link>                            
                        </> 
                }
            </div>
        </div>
    );
};

export default Header;