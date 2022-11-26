import React, { useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify";
import '../styles/login.scss'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const login = async (e) => {
        e.preventDefault()
        await axios.post('/login', { email, password })
            .then((res) => {
                setEmail('')
                setPassword('')
                toast.success(res.data.message)
                // navigate('/login')
            })
            .catch((err) => {
                toast.error(err.response.data.message)
            })
    }
    return (
        <div className='LoginForm py-5 my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <form onSubmit={login} className="cards">
                            <h2 className='mb-5 text-center'>Login</h2>
                            <input onChange={e => setEmail(e.target.value)} value={email} type="email" required placeholder='Email' className="form-control mb-4" />
                            <input onChange={e => setPassword(e.target.value)} value={password} type="password" required placeholder='Password' className="form-control mb-4" />
                            <button type='submit' className="btn myBtn">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm