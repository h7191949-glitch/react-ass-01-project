
import React from "react";
import "./Announcement.css";
import { Link } from "react-router-dom";

export default function Announcement() {
  return (
    <div className="announcement-bar">
      <p>Sign up and get 20% off to your first order.</p>
      <Link to="/signup" className="announcement-signup">
        Sign Up Now
      </Link>
    </div>
  );
}
