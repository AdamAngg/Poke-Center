import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokemonNodeClicked } from "../store/pokemonSlice";

export const useToggleClick = ({ element, className, dispatching }) => {
  const currentElementRef = useRef(null);
  const dispatch = useDispatch();

  const onClickHandler = useCallback(() => {
    dispatching &&
      dispatch(addPokemonNodeClicked(Number(currentElementRef.current.id)));
    const elements = document.querySelectorAll("." + element);
    elements.forEach((e) => e.classList.remove(className));

    currentElementRef.current.classList.add(className);
  }, []);

  return [onClickHandler, currentElementRef];
};
