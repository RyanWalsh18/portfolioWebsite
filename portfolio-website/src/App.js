import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Project from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import AboutMe from './pages/AboutMe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Project />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path='/aboutMe' element={<AboutMe/> } />
        </Routes>
        <Footer> </Footer>
      </Router>
    </div>

  );
}

export default App;
