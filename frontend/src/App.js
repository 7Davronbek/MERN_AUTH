import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './pages/main/Main'
import SignUp from './pages/sign-up/SignUp'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/login/Login';

const App = () => {
    return (
        <>
            <HashRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
                <ToastContainer />
            </HashRouter>
        </>
    )
}

export default App