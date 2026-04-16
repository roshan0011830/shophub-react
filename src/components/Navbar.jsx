import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

function Navbar() {
  const {user, logout, setMode} = useAuth();

  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <Link to="/" className='navbar-brand'>ShopHub</Link>
        <div className="navbar-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/checkout">Cart</NavLink>
        </div>

        <div className="navbar-auth">
          <div className="navbar-auth-links">
            {!user ? (<>
              <Link to="/auth" onClick={() => setMode("login")} className='btn btn-primary'>Login</Link>
            <Link to="/auth" onClick={() => setMode("signup")} className='btn btn-secondary'>Signup</Link>
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
