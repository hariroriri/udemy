import { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import './VideoList.css';

// Mock video data
const mockVideos = [
  {
    id: 1,
    title: "Sample Video 1",
    url: "https://youtu.be/GqQmvAplLpQ?si=16tHATBp_qLcVd8m"
  }
];

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    const fetchVideos = () => {
      setTimeout(() => {
        setVideos(mockVideos);
        setCurrentVideo(mockVideos[0]); // Automatically set the first video as current
        setLoading(false); // Set loading to false once data is fetched
      }, 1000); // Simulate network delay
    };

    fetchVideos();
  }, []);

  return (
    <div className="video-list">
      {loading ? (
        <div className="spinner"></div> // Show spinner while loading
      ) : (
        <>
          {currentVideo && (
            <VideoPlayer
              url={currentVideo.url}
              courseTitle={currentVideo.title}
            />
          )}

          <video width="750" height="500" controls >
          <source src="/public/video/leo.mp4" type="video/mp4" />
        </video>
        </>
      )}
    </div>
  );
};

export default VideoList;
