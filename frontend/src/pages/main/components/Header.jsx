import React from 'react'
import axios from 'axios'
import '../styles/main.scss'
import { useEffect } from 'react'
axios.defaults.withCredentials = true

const Header = () => {

    const sendRequest = async () => {
        await axios.get('/user', {
            withCredentials: true
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        sendRequest().then((data) => console.log(data))
    }, [])

    return (
        <div className='Header'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto text-center py-5">
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header