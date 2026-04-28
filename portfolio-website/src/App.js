// Root component — wraps the entire app in a Router so all child components
// can use React Router hooks (useParams, Link, etc.)
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
      {/* BrowserRouter provides client-side routing for the whole app */}
      <Router>
        {/* Navbar is rendered on every page, outside of Routes */}
        <Navbar></Navbar>
        <Routes>
          {/* Landing page */}
          <Route path='/' element={<Home />} />
          {/* Project gallery listing all projects */}
          <Route path='/projects' element={<Project />} />
          {/* Dynamic route — :id matches a specific project's numeric ID */}
          <Route path="/projects/:id" element={<ProjectDetails />} />
          {/* About Me bio */}
          <Route path='/aboutMe' element={<AboutMe />} />
        </Routes>
        {/* Footer is rendered on every page, outside of Routes */}
        <Footer> </Footer>
      </Router>
    </div>

  );
}

export default App;
