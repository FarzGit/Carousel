import React, { useState, useEffect } from 'react';
import axios from "axios"

const VideoLoop = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoUrls, setvideoUrls] = useState([])
 

  useEffect(() => {
    const videoElement = document.getElementById('video');

    const handleEnded = () => {
      // Move to the next video in the array
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
    };

    videoElement.addEventListener('ended', handleEnded);

    // Ensure the next video plays when component mounts or current video changes
    videoElement.src = videoUrls[currentVideoIndex];
    console.log("ENterd")
    console.log(currentVideoIndex)

    return () => {
      videoElement.removeEventListener('ended', handleEnded);
      console.log("Exited")
    };
  }, [currentVideoIndex, videoUrls]);

  useEffect(()=>{
    const getVideos =() =>{
      axios.get("http://localhost:8000/api/videos/").then(res=>{
        const videos = res.data.map(i=>'http://localhost:8000/'+i.video_file)
        console.log(videos)
        setvideoUrls(videos)
        
      })
    }
    getVideos()
  },[])

  return (
    <video id="video" width={"100%"} autoPlay muted >
      <source src={videoUrls[currentVideoIndex]} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoLoop;