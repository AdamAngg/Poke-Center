import { useEffect, useState } from "react";

import { styled, css } from "styled-components";

const StyledSliderImage = styled.div`
  opacity: ${({ loading }) => loading};
  background-image: ${({ imageurl }) => `url(${imageurl})`};

  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    border-radius: 50%;
    height: 85rem;
    width: 85rem;
    bottom: 30%;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${(props) => `var(--${props.color})`};
  }
`;

export const Slider = ({ images, type }) => {
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
      <StyledSliderImage
        className="slider__image"
        alt=""
        loading={loading ? 0 : 1}
        imageurl={images[slides[currentSlide]]}
        color={type}
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
      </StyledSliderImage>
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
    </figure>
  );
};
