import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

const SignUpForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const signUp = async (e) => {
        e.preventDefault()
        await axios.post('/signup', { name, email, password })
            .then((res) => {
                setName('')
                setEmail('')
                setPassword('')
                toast.success('Login please')
                navigate('/login')
            })
            .catch((err) => {
                toast.error(err.response.data.message)
            })
    }

    return (
        <div className='SignUpForm py-5 my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <form onSubmit={signUp} className="cards">
                            <h2 className='mb-5 text-center'>Sign Up</h2>
                            <input onChange={e => setName(e.target.value)} value={name} type="text" required placeholder='Name' className="form-control mb-4" />
                            <input onChange={e => setEmail(e.target.value)} value={email} type="email" required placeholder='Email' className="form-control mb-4" />
                            <input onChange={e => setPassword(e.target.value)} value={password} type="password" required placeholder='Password' className="form-control mb-4" />
                            <button type='submit' className="btn myBtn">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm