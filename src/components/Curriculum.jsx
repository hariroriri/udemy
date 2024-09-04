import { useState } from "react";
import initialVideo from "../assets/video/sample-video.mp4"; // Local video
import './Curriculum.scss'; // Assuming you save the CSS in Curriculum.css

const Curriculum = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [videoSrc, setVideoSrc] = useState(initialVideo); // Set initial video source
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const isYouTubeURL = (url) => url.startsWith("https://www.youtube.com/embed/");

  const handleVideoChange = (url) => {
    setLoading(true);
    setError(null);

    // Simulate video loading process
    setTimeout(() => {
      try {
        setVideoSrc(url);
        setLoading(false);
      } catch (e) {
        setError("Failed to load video.");
        setLoading(false);
      }
    }, 500); // Simulating a delay
  };

  const getArrowClass = (section) => expandedSections[section] ? 'arrow-up' : 'arrow-down';

  return (
    <div className="curriculum">
      <h2>Curriculum</h2>

      {/* Video Player */}
      <div className="video-player">
        {loading && <div className="loading-spinner">Loading...</div>}
        {error && <div className="error-message">{error}</div>}
        {!loading && !error && (
          <>
            {isYouTubeURL(videoSrc) ? (
              <iframe
                width="100%"
                height="315"
                src={videoSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video width="100%" controls>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </>
        )}
      </div>

      <ul>
        {/* Main Heading 1 */}
        <li>
          <div className="section-header" onClick={() => toggleSection("intro")}>
            <h3>Introduction</h3>
            <span className={`arrow ${getArrowClass("intro")}`}></span>
          </div>
          {expandedSections["intro"] && (
            <ul>
              <li onClick={() => handleVideoChange("https://www.youtube.com/embed/HlzR7kFTEU4")}>
                Introduction to SEO
              </li>
              <li onClick={() => handleVideoChange("https://www.youtube.com/embed/7vhi_1e0Ra4")}>
                Keyword Research and Analysis
              </li>
              <li onClick={() => handleVideoChange(initialVideo)}>
                Local Video Example
              </li>
              <li onClick={() => handleVideoChange("https://www.youtube.com/embed/RyY3YwvuQ2k")}>
                Local Video Example-2
              </li>
            </ul>
          )}
        </li>

        {/* Main Heading 2 */}
        <li>
          <div className="section-header" onClick={() => toggleSection("onpage")}>
            <h3>On-Page SEO</h3>
            <span className={`arrow ${getArrowClass("onpage")}`}></span>
          </div>
          {expandedSections["onpage"] && (
            <ul>
              <li onClick={() => handleVideoChange("https://www.youtube.com/embed/Ngj76BNismI")}>
                On-Page Optimization
              </li>
              <li onClick={() => handleVideoChange("https://www.youtube.com/embed/4nVAa5xlOic")}>
                Technical SEO
              </li>
            </ul>
          )}
        </li>

        {/* Main Heading 3 */}
        <li>
          <div className="section-header" onClick={() => toggleSection("offpage")}>
            <h3>Off-Page SEO</h3>
            <span className={`arrow ${getArrowClass("offpage")}`}></span>
          </div>
          {expandedSections["offpage"] && (
            <ul>
              <li onClick={() => handleVideoChange("https://www.youtube.com/embed/5c8SP8myGm4")}>
                Off-Page Optimization
              </li>
              <li onClick={() => handleVideoChange("https://www.youtube.com/embed/ET6Wq-Ttnyk")}>
                Link Building Strategies
              </li>
            </ul>
          )}
        </li>

        {/* Main Heading 4 */}
        <li>
          <div className="section-header" onClick={() => toggleSection("advanced")}>
            <h3>Advanced SEO</h3>
            <span className={`arrow ${getArrowClass("advanced")}`}></span>
          </div>
          {expandedSections["advanced"] && (
            <ul>
              <li onClick={() => handleVideoChange("https://www.youtube.com/embed/9x1Xo5R-L5M")}>
                Content Marketing
              </li>
              <li onClick={() => handleVideoChange("https://www.youtube.com/embed/67wC8bBLN4M")}>
                SEO Tools and Resources
              </li>
              <li onClick={() => handleVideoChange("https://www.youtube.com/embed/UDwR8YqKk04")}>
                Case Studies
              </li>
              <li onClick={() => handleVideoChange("https://www.youtube.com/embed/W8cD4iG1Z8M")}>
                Final Project
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Curriculum;
