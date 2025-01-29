import React from "react";
import { MdDashboard } from "react-icons/md";
import "./account.css";
import { IoMdLogOut } from "react-icons/io";
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = ({ user }) => {
  const { setIsAuth, setUser } = UserData();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  };

  return (
    <div className="account-container"> {/* Added a container */}
      {user && (
        <div className="profile">
          <div className="profile-header"> {/* Added a header */}
            <h2>My Profile</h2>
          </div>
          <div className="profile-info">
            <div className="info-item"> {/* Wrapped each info item */}
              <span className="info-label">Name:</span>
              <span className="info-value">{user.name}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">{user.email}</span>
            </div>

            <div className="button-group"> {/* Button group for better layout */}
              <button
                onClick={() => navigate(`/${user._id}/dashboard`)}
                className="common-btn dashboard-btn"
              >
                <MdDashboard className="btn-icon" /> {/* Icon inside button */}
                Dashboard
              </button>

              {user.role === "admin" && (
                <button
                  onClick={() => navigate(`/admin/dashboard`)}
                  className="common-btn admin-dashboard-btn"
                >
                  <MdDashboard className="btn-icon" />
                  Admin Dashboard
                </button>
              )}

              <button
                onClick={logoutHandler}
                className="common-btn logout-btn"
              >
                <IoMdLogOut className="btn-icon" />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;