import React from "react";
import { useNavigate } from "react-router-dom";
import Testimonials from "../../components/testimonials/Testimonials";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to our The Flexing Physio</h1>
          <p>Perfect for Online Physiotherapist Exercises</p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
