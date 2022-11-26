import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar py-4'>
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <Link to='/'><h3>LOGO</h3></Link>
                </div>
                <div className="col-lg-6 ms-auto">
                    <div className="d-flex align-items-center justify-content-end">
                        <Link className='me-4' to='/sign-up'>Sign Up</Link>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar