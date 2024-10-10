import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import ProtectedRoute from "./ProtectedRoute.jsx";
import BookDataForm from "./pages/BookDataForm.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";

function App() {
    return (
        <Router>
            <Header />
            <main className='container content flex content-center justify-center items-center w-screen h-[72vh] lg:h-[79vh] pt-2 pb-2'>
                <Routes>
                    <Route path="/books" element={<BookDataForm />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/product" element={<Product />}/>
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
