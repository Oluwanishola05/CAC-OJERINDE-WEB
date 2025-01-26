import React from 'react';
import "../../../../style/choirSlider.css"; // Adjust the path if needed
import chorister5 from "../../../../assets/image/CHOIR PICTURES/Choristers5.jpg";
import chorister6 from "../../../../assets/image/CHOIR PICTURES/Choristers6.jpg";
import chorister7 from "../../../../assets/image/CHOIR PICTURES/Choristers7.jpg";
import chorister4 from "../../../../assets/image/CHOIR PICTURES/Choristers4.jpg";
import LadiesGroup3 from "../../../../assets/image/CHOIR PICTURES/LadiesGroup3.jpg";
import LadiesGroup2 from "../../../../assets/image/CHOIR PICTURES/LadiesGroup2.jpg";
import cm2 from "../../../../assets/image/CHOIR PICTURES/CM2.jpg";

const images = [
  chorister5,
  chorister6,
  chorister7,
  chorister4,
  LadiesGroup3,
  LadiesGroup2,
  cm2,
];

const choirSlider = () => {
  return (
    <div className="gallery-slider">
      <div className="slider-track">
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <div className="image-frame">
              <img src={image} alt={`Choir ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default choirSlider;
