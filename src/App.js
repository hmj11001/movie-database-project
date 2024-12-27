import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Notice the addition of Routes and Route
import MovieSearch from './MovieSearch';
import MovieListPage from './MovieListPage'; // We'll create this page for showing lists
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'; // Import Navbar


function App() {
  return (
    <Router>
      <Navbar />
    <div className="App">
      <Routes>
          <Route path="/" element={<MovieSearch />} />
          <Route path="/wanttowatch" element={<MovieListPage listName="Want to Watch" />} />
          <Route path="/liked" element={<MovieListPage listName="Liked" />} />
          <Route path="/disliked" element={<MovieListPage listName="Disliked"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
