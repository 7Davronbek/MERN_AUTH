import React from 'react'
import axios from 'axios'
import '../styles/main.scss'
import { useEffect } from 'react'
axios.defaults.withCredentials = true
let firstRender = true

const Header = () => {

    const refreshToken = async () => {
        await axios.get('/refresh', { withCredentials: true })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

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
        if (firstRender) {
            sendRequest()
            firstRender = false
        }
        let interval = setInterval(() => {
            refreshToken().then((data) => console.log(data))
        }, 1000 * 28)

        return () => clearInterval(interval)
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