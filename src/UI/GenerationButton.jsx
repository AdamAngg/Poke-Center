import { useToggleClick } from "../hooks/useToggleClick.hook";

export const GenerationButton = () => {
  const [onClickHandler, active, currentElementRef, className] = useToggleClick(
    "generations-btn__span",
    "generations-btn__hover"
  );

  return (
    <>
      <button
        onClick={() => {
          onClickHandler();
        }}
        className="generations-btn "
      >
        <span
          className={"generations-btn__span " + (active ? className : "")}
          ref={currentElementRef}
        ></span>
        Click
      </button>
    </>
  );
};
