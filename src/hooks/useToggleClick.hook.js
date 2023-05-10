import { useCallback, useRef, useState } from "react";

export const useToggleClick = ({ element, className }) => {
  const currentElementRef = useRef(null);

  const onClickHandler = useCallback(() => {
    if (currentElementRef.current) {
      currentElementRef.current.classList.add(className);
    }

    const elementArray = document.querySelectorAll("." + element);
    elementArray.forEach((e) => {
      if (e !== currentElementRef.current) {
        e.classList.remove(className);
      }
    });
  }, []);

  return [onClickHandler, currentElementRef];
};
