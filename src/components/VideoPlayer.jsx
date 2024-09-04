import { useState } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import './VideoPlayer.css';

const VideoPlayer = ({ url, courseTitle }) => {
  const [played, setPlayed] = useState(0);
  const navigate = useNavigate();

  const handleProgress = (state) => {
    setPlayed(state.played);
  };

  const goBack = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="video-page">
      {/* Navbar */}
      <nav className="navbar">
        <button onClick={goBack} className="back-button">
          &#8592; {/* Back Arrow */}
        </button>
        <h2 className="course-title">{courseTitle}</h2>
      </nav>

      {/* Video Player */}
      <div className="video-player-container">
        <ReactPlayer
          url={url}
          controls
          width="100%"
          height="100%"
          onProgress={handleProgress}
          playing={false} // Video is ready to play, but not auto-playing
        />
        {/* <div className="progress-bar">
          <div className="progress" style={{ width: `${played * 100}%` }} />
        </div> */}
      </div>
    </div>
  );
};

export default VideoPlayer;
