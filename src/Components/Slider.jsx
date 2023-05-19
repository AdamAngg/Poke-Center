import { useEffect, useState } from "react";

import { styled } from "styled-components";
const StyledFigure = styled.figure`
  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    border-radius: 50%;
    height: 170%;
    width: 120%;
    bottom: 30%;
    left: 50%;
    opacity: ${({ loading }) => loading};
    transform: translateX(-50%);

    background-image: linear-gradient(
      to right bottom,
      ${(props) => `var(--${props.color})`} 50%,
      ${(props) => `var(--${props.color2})`}
    );

    transition: opacity 0.2s ease-in-out;
  }
`;

const StyledSliderImage = styled.div`
  opacity: ${({ loading }) => loading};
  background-image: ${({ imageurl }) => `url(${imageurl})`};
`;

export const Slider = ({ name, images, types, id, stats }) => {
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
    <StyledFigure
      className="slider"
      color={types[0]?.type?.name}
      color2={
        types[1]?.type?.name ? types[1]?.type?.name : types[0]?.type?.name
      }
      loading={loading ? 0 : 1}
    >
      <img
        src={images[slides[currentSlide + 1]]}
        alt=""
        style={{ display: "none" }}
      />
      <StyledSliderImage
        className="slider__image"
        aria-label={
          currentSlide === 0
            ? "Biger picture of " + name
            : "Biger picture of shiny " + name
        }
        loading={loading ? 0 : 1}
        imageurl={images[slides[currentSlide]]}
      >
        <div className="slider__arrow__left ">
          <ion-icon
            name="chevron-back-outline"
            onClick={goToPreviousSlide}
          ></ion-icon>
        </div>
        <div className="slider__arrow__right">
          <ion-icon
            name="chevron-forward-outline"
            onClick={goToNextSlide}
          ></ion-icon>
        </div>
      </StyledSliderImage>
      <div className="slider__dot">
        {slides.map((e, index) => {
          return (
            <button
              key={index}
              onClick={(evt) => onClickHandler(evt.target.dataset, index)}
              data-active={index === currentSlide ? "true" : "false"}
            ></button>
          );
        })}
      </div>

      <button className="slider__btn__stats slider__btn__stats__left">
        <div className="hehe">
          <span>No. </span>
          <span>{id}</span>
        </div>
      </button>

      <button className="slider__btn__stats slider__btn__stats__right">
        <div className="slider__btn__stats__container">
          <span>HP </span>
          <span>{stats[0]?.base_stat}</span>
        </div>
      </button>
    </StyledFigure>
  );
};
