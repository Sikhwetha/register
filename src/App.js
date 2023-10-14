

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Profile from './components/Profile';
import Home from './components/Home';
import Todo from './components/Todo'



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
     
          <Routes>
         
            <Route path="/Home" element={<Home/>} />
            <Route path="/Form" element={<Form/>} />
            <Route path="/Profile" element={<Profile/>} />
            <Route path="/Todo" element={<Todo/>} />
          </Routes>
        </main>
        </div>
    </Router>
  );
}

export default App;

