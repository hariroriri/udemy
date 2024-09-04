import React from "react";
import { useState } from "react";
import {
  FaUserTie,
  FaMoneyBillWave,
  FaRegClock,
  FaBook,
  FaUsers,
  FaLanguage,
  FaCertificate,
} from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../components/Description.css";
import Curriculum from "./Curriculum";
import { SectionOverview } from "./SectionOverview";
import { Instructor } from "./Instructor";
import { Rating } from "./Rating";
import { Reviews } from "./Reviews";

export const Description = () => {
  const [activeSection, setActiveSection] = useState("Overview");
  return (
    <>
      <div className="container-fluid">
        <div className="des-head">
          <div className="description">
            <h1>
              Staring SEO as your Home
              <br />
              Based Business
            </h1>
            <div className="descrp-rev">
              <span className="icon">
                <FaUserTie />
              </span>
              <p>By Edward Norton</p>
              <span className="icon">
                <AiOutlineGlobal />
              </span>
              <p>Business</p>
              <span className="stars">☆☆☆☆☆</span>
              <p>(3 Reviews)</p>
            </div>
          </div>
        </div>

        {/* Course Description*/}
        {/* Navigation Section */}
        <div className="nav-section">
          <ul>
            <li
              className={activeSection === "Overview" ? "active" : ""}
              onClick={() => setActiveSection("Overview")}
            >
              Overview
            </li>
            <li
              className={activeSection === "Curriculum" ? "active" : ""}
              onClick={() => setActiveSection("Curriculum")}
            >
              Curriculum
            </li>
            <li
              className={activeSection === "Instructor" ? "active" : ""}
              onClick={() => setActiveSection("Instructor")}
            >
              Instructor
            </li>
            <li
              className={activeSection === "Reviews" ? "active" : ""}
              onClick={() => setActiveSection("Reviews")}
            >
              Reviews
            </li>
          </ul>
        </div>

        {/* Card Component */}
        <div className="course-card">
          {/* Demo Video */}
          <div className="video-container">
            <video width="100%" controls>
              <source
                src="/video/leo.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <h1 className="course-head">Course Includes:</h1>

          {/* Course Details */}
          <div className="course-details">
            <div className="detail-item">
              <FaMoneyBillWave className="detail-icon" />
              <p>Price:</p>
              <span>$30</span>
            </div>
            <hr />
            <div className="detail-item">
              <FaUserTie className="detail-icon" />
              <p>Instructor:</p>
              <span>Hari</span>
            </div>
            <hr />
            <div className="detail-item">
              <FaRegClock className="detail-icon" />
              <p>Duration:</p>
              <span>15 weeks</span>
            </div>
            <hr />
            <div className="detail-item">
              <FaBook className="detail-icon" />
              <p>Lessons:</p>
              <span>11</span>
            </div>
            <hr />
            <div className="detail-item">
              <FaUsers className="detail-icon" />
              <p>Students:</p>
              <span>226</span>
            </div>
            <hr />
            <div className="detail-item">
              <FaLanguage className="detail-icon" />
              <p>Language:</p>
              <span>English</span>
            </div>
            <hr />
            <div className="detail-item">
              <FaCertificate className="detail-icon" />
              <p>Certifications:</p>
              <span>Yes</span>
            </div>
          </div>

          {/* Buy Now Button */}
          <div className="buy-now">
            <button className="btn-buy">Buy Now</button>
          </div>

          {/* Social Media Share */}
          <div className="share-on">
            <p>Share On:</p>
            <span className="icon">
              <FaFacebook />
            </span>
            <span className="icon">
              <FaTwitter />
            </span>
            <span className="icon">
              <FaLinkedin />
            </span>
          </div>
        </div>
      </div>

      {/* Section Content */}
      <div className="section-content">
        {activeSection === "Overview" && (
            <SectionOverview />
        )}
        {activeSection === "Curriculum" && (
            <Curriculum />
        )}
        {activeSection === "Instructor" && (
            <Instructor />
        )}
        {activeSection === "Reviews" && (
            <Rating />          
        )}
        {activeSection === "Reviews" && (
            <Reviews />
        )}
        
      </div>
    </>
  );
};
