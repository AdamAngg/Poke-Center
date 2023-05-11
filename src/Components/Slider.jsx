import { useEffect, useState } from "react";
import { LoadingSpinner } from "./Spinner";

export const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = Object.keys(images);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCurrentSlide(0);
    setLoading(true);
  }, [images]);

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
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <figure className="slider">
      {loading && <LoadingSpinner />}

      <div
        className="slider__image"
        alt=""
        style={{
          opacity: loading ? 0 : 1,
          backgroundImage: `url(${images[slides[currentSlide]]})`,
        }}
      >
        <div className="slider__btn__left ">
          <ion-icon
            name="chevron-back-outline"
            onClick={goToPreviousSlide}
          ></ion-icon>
        </div>
        <div className="slider__btn__right">
          <ion-icon
            name="chevron-forward-outline"
            onClick={goToNextSlide}
          ></ion-icon>
        </div>
      </div>

      {slides.map((e) => {
        return;
      })}
      <h1 className="Slider__title"></h1>
    </figure>
  );
};
