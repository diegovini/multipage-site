import './App.css'
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <h1>My Articles</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Routes>
      <Route path='/' element={<Home/>}>    
      </Route>
      <Route path='/about' element={<About/>}>        
      </Route>
      <Route path='/contact'  element={<Contact/>}>        
      </Route>
      <Route path='/articles/:id' element={<Article/>}>        
      </Route>
      <Route path='*' element={<Navigate to="/"/>}>              
      </Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App
