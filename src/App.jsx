import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateBook from './pages/CreateBook.jsx';
import Login from './pages/Login.jsx';

function App() {
    return (
        <Router>
            <Header />
            <main id="content">
                <Routes>
                    <Route path="/" element={<CreateBook />}/>
                    <Route path="/login" element={<Login />}/>
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
