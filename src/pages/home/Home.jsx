import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSignOut } from 'react-auth-kit';


const Home = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();

  const logout = () => {
    signOut();
    navigate("/login");
  }

  return (
    <div className="home-container">
      <h1>Welcome Home Bud!!</h1>
      <button>Get Payment</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home;
