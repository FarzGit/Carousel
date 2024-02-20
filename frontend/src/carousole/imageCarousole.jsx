/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useRef, useEffect } from 'react';

function ImageCarosole() {
  const slides = [
    { url: 'natural vedio.mp4' },
    { url: 'natural vedio.mp4' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = slides.map(() => useRef(null));

  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {

    console.log(currentSlide)
    const handleVideoEnded = () => {
      if (currentSlide === slides.length - 1) {
        setCurrentSlide(0); 
      } else {
        nextSlide(); 
      }
    };

    const currentVideoRef = videoRefs[currentSlide].current;

    if (currentVideoRef) {

      console.log('ullil kayari')
      currentVideoRef.addEventListener('ended', handleVideoEnded);

      return () => {

        console.log('purath vitt')
        currentVideoRef.removeEventListener('ended', handleVideoEnded);
      };
    }
  }, [currentSlide, videoRefs]);





  return (
    <div className="flex">
      {slides.map((slide, i) => (
        <div key={i} style={{ display: i === currentSlide ? 'block' : 'none', width: '100vw', height: '100vh' }}>
          <video
            ref={videoRefs[i]}
            src={slide.url}
            className="image"
            autoPlay
            muted
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ))}
    </div>
  );
}

export default ImageCarosole;
