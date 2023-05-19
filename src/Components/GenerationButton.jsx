import { useToggleClick } from "../hooks/useToggleClick.hook";
import { useDispatch } from "react-redux";
import { fetchPokemon } from "../store/pokemonInfoSlice";
import { setDefaultPage } from "../store/pokemonSlice";
export const GenerationButton = ({ name, value, id }) => {
  const [onClickHandler, currentElementRef] = useToggleClick({
    element: "generations-btn__span",
    className: "generations-btn__hover",
    dispatching: false,
  });

  const dispatch = useDispatch();
  return (
    <>
      <button
        id={id}
        onClick={() => {
          dispatch(fetchPokemon(value));
          onClickHandler();
          dispatch(setDefaultPage());
        }}
        className="generations-btn "
      >
        <span
          className={
            "generations-btn__span " +
            (name === "Generation1" ? "generations-btn__hover " : "")
          }
          ref={currentElementRef}
        ></span>
        <span>{name}</span>
      </button>
    </>
  );
};
