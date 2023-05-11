import { useState } from "react";
export const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = Object.keys(images);

  const goToNextSlide = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  return (
    <figure className="slider">
      <img
        className="slider__image"
        alt=""
        src={images[slides[currentSlide]]}
      />
      <ion-icon
        className="slider__btn__left"
        name="chevron-back-outline"
        onClick={goToPreviousSlide}
      ></ion-icon>
      <ion-icon
        className="slider__btn__right"
        name="chevron-forward-outline"
        onClick={goToNextSlide}
      ></ion-icon>
      {slides.map((e) => {
        return;
      })}
      <h1 className="Slider__title"></h1>
    </figure>
  );
};
