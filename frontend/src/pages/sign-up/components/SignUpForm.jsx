import React from 'react'
import { useState } from 'react'

const SignUpForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='SignUpForm py-5 my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <form className="cards">
                            <h3 className='mb-5'>Sign Up</h3>
                            <input type="text" required placeholder='Name' className="form-control mb-4" />
                            <input type="email" required placeholder='Email' className="form-control mb-4" />
                            <input type="password" required placeholder='Password' className="form-control mb-4" />
                            <button type='submit' className="btn myBtn">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm