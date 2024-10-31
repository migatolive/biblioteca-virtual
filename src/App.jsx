import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import ProtectedRoute from "./ProtectedRoute.jsx";
import BookDataForm from "./pages/BookDataForm.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
// import Portfolio from "./pages/Porfolio.jsx";

function App() {
    return (
        <Router>
            <Header />
            <main className='container mx-auto flex justify-center items-center h-[72vh] lg:h-[79vh] py-2 relative'>
                <Routes>
                    <Route path="/books" element={<BookDataForm />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/product" element={<Product />}/>
                    {/*<Route path="/portfolio" element={<Portfolio />}/>*/}
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route element={<ProtectedRoute />}>
                        <Route path="/user-profile" element={<Profile />}/>
                    </Route>
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
