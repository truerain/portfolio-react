import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Sidebar from './layouts/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Sidebar>
      
    </div>
  );
}

export default App;


const Dashboard = () => {
  return (
    <div className="dashboard">
      Dashboard
    </div>
  );
}

const About = () => {
  return (
    <div className="about">
      About
    </div>
  );
}
const Comments = () => {
  return (
    <div className="Comments">
      Comments
    </div>
  );
}
const Analytics = () => {
  return (
    <div className="analytics">
      Analytics
    </div>
  );
}
const Products = () => {
  return (
    <div className="products">
      Products
    </div>
  );
}
