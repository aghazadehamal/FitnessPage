import React from 'react';

const EducationalVideo = () => {
  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
        title="Eğitici Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
  );
};

export default EducationalVideo;
