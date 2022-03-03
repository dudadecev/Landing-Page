import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from '../src/Pages/Home'
import { About } from '../src/Pages/About'
import { Header } from '../src/Shared/Components/Header'
import { Build } from  '../src/Pages/Build'
import { Create } from '../src/Pages/Create'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="build" element={<Build />} />
        <Route path="create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;