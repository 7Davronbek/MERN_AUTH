import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './pages/main/Main'

const App = () => {
    return (
        <>
            <HashRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Main />} />
                </Routes>
            </HashRouter>
        </>
    )
}

export default App