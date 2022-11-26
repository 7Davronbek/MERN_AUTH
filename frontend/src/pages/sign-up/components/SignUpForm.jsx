import React from 'react'

const SignUpForm = () => {
    return (
        <div className='SignUpForm py-5 my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="cards">
                            <h3 className='mb-5'>Sign Up</h3>
                            <input type="text" required placeholder='Name' className="form-control mb-4" />
                            <input type="email" required placeholder='Email' className="form-control mb-4" />
                            <input type="password" required placeholder='Password' className="form-control mb-4" />
                            <button className="btn myBtn">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm