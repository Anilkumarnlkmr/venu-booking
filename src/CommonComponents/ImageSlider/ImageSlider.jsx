import React, { useState,useEffect } from 'react';
import './ImageSlider.css'

// import a from 
// import b from '../../../public/Images/b.jpg'
// import c from '../../../public/Images/c.jpg'
// import d from '../../../public/Images/d.jpg'


const SimpleSlideshow = () => {
    const slideData = [
        {
          imgURL:
            "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          imgAlt: "img-1"
        },
        {
          imgURL:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          imgAlt: "img-2"
        },
        {
          imgURL:
            "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          imgAlt: "img-3"
        },
        {
          imgURL:
            "https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          imgAlt: "img-4"
        }
      ];
  const [currentIndex, setCurrentIndex] = useState(0);    

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % slideData.length;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="slideshow-container">
      {slideData.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}
    </div>
  );
};

export default SimpleSlideshow;
