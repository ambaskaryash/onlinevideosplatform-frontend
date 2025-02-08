import React from "react";
import "./paymentfailed.css";
import { Link } from "react-router-dom";

const PaymentFailed = () => {
  return (
    <div className="payment-failed-page">
      <div className="failed-message">
        <h2>Payment Failed</h2>
        <p>Your payment was not successful. Please try again.</p>
        <Link to="/courses" className="common-btn">
          Back to Courses
        </Link>
      </div>
    </div>
  );
};

export default PaymentFailed;
