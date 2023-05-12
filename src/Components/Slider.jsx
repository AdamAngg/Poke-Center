import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter.helper";

export const Slider = ({ images, name, type }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = Object.keys(images);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCurrentSlide(0);
    setLoading(false);
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
  const onClickHandler = (evt, i) => {
    if (evt.active === "false") {
      setCurrentSlide(i);
    }
  };

  return (
    <figure className="slider">
      <img
        src={images[slides[currentSlide + 1]]}
        alt=""
        style={{ display: "none" }}
      />
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
        <div className="slider__dot">
          {slides.map((e, i) => {
            return (
              <button
                key={i}
                onClick={(evt) => onClickHandler(evt.target.dataset, i)}
                data-active={i === currentSlide ? "true" : "false"}
              ></button>
            );
          })}
        </div>
        <h3 className="slider__title">
          <span>{capitalizeFirstLetter(name)}</span>
        </h3>
      </div>
    </figure>
  );
};
