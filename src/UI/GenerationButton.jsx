import { useToggleClick } from "../hooks/useToggleClick.hook";
import { useDispatch } from "react-redux";
import { fetchPokemon } from "../store/pokemonSlice";
export const GenerationButton = ({ name, value }) => {
  const [onClickHandler, active, currentElementRef, className] = useToggleClick(
    { element: "generations-btn__span", className: "generations-btn__hover" }
  );
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(fetchPokemon(value));
          onClickHandler();
        }}
        className="generations-btn "
      >
        <span
          className={
            "generations-btn__span " +
            (name === "Generation1" && !active
              ? "generations-btn__hover "
              : "") +
            (active ? className : "")
          }
          ref={currentElementRef}
        ></span>
        {name}
      </button>
    </>
  );
};
