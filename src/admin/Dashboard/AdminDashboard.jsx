import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Utils/Layout";
import axios from "axios";
import { server } from "../../main";
import "./dashboard.css";
import { FaBook, FaVideo, FaUsers } from "react-icons/fa"; // Import icons

const AdminDashboard = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role!== "admin") return navigate("/");

  const [stats, setStats] = useState({
    totalCoures: 0,
    totalLectures: 0,
    totalUsers: 0,
  }); // Initialize with default values to avoid undefined errors

  async function fetchStats() {
    try {
      const { data } = await axios.get(`${server}/api/stats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setStats(data.stats);
    } catch (error) {
      console.error("Error fetching stats:", error); // More descriptive error message
      // Consider displaying a user-friendly error message, e.g., using toast
    }
  }

  useEffect(() => {
    fetchStats();
  },);

  return (
    <Layout>
      <div className="dashboard-container"> {/* Container for better layout */}
        <h1>Admin Dashboard</h1> {/* Added a title */}
        <div className="stats-grid"> {/* Grid for responsive layout */}
          <div className="stat-box">
            <div className="stat-icon">
              <FaBook /> {/* Added icon */}
            </div>
            <div className="stat-content">
              <p className="stat-label">Total Courses</p>
              <p className="stat-value">{stats.totalCoures}</p>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">
              <FaVideo /> {/* Added icon */}
            </div>
            <div className="stat-content">
              <p className="stat-label">Total Lectures</p>
              <p className="stat-value">{stats.totalLectures}</p>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">
              <FaUsers /> {/* Added icon */}
            </div>
            <div className="stat-content">
              <p className="stat-label">Total Users</p>
              <p className="stat-value">{stats.totalUsers}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;