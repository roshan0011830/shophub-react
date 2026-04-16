import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

function Navbar() {
  const {user, logout} = useAuth();

  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <Link to="/" className='navbar-brand'>ShopHub</Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/checkout">Cart</Link>
        </div>

        <div className="navbar-auth">
          <div className="navbar-auth-links">
            {!user ? (<>
              <Link to="/auth" className='btn btn-primary'>Login</Link>
            <Link to="/auth" className='btn btn-secondary'>Signup</Link>
            </>) :(
              <div className='navbar-user'>
                <span className='navbar-greeting'>Hello😎, {user.email}</span>
                <button onClick={()=>logout()} className='btn btn-red'>Logout</button>
              </div>
            )}
          </div>
        </div>

      </div>
      
    </nav>
  )
}

export default Navbar
