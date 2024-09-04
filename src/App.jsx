// App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary'; // Adjust the path as needed
// import Login from './components/authentication/login';
import Footer from './components/Footer/Footer';
import { Description } from './components/Description';
import { Contact } from './components/Contact';
import VideoList from './components/VideoList';
import Curriculum from './components/Curriculum';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';



function App() {
    return (
        <Router>
            <ErrorBoundary>
                <Routes>
                    <Route path="/" element={<SignIn />}/>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/footer" element={<Footer />} />
                    <Route path="/description" element={<Description />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/video" element={<VideoList />} />
                    <Route path="/curriculum" element={<Curriculum />} />
                </Routes>
            </ErrorBoundary>
        </Router>
    );
}

export default App;
