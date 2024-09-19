import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import ProtectedRoute from "./ProtectedRoute.jsx";
import BookDataForm from "./pages/BookDataForm.jsx";

function App() {
    return (
        <Router>
            <Header />
            <main className='container content'>
                <Routes>
                    <Route path="/" element={<BookDataForm />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route element={<ProtectedRoute />}>
                        <Route path="/user-profile" element={<Profile />}/>
                    </Route>
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
