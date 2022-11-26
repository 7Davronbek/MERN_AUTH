import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar py-4'>
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <Link to='/'><h3>Logo</h3></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar