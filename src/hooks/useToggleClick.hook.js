import { useCallback, useRef, useState, useEffect } from "react";

export const useToggleClick = (element, className) => {
  const [active, setActive] = useState(false);
  const currentElementRef = useRef(null);

  const onClickHandler = useCallback(() => {
    if (currentElementRef.current) {
      currentElementRef.current.classList.add(className);
    }
    setActive(true);
    const elementArray = document.querySelectorAll("." + element);
    elementArray.forEach((e) => {
      if (e !== currentElementRef.current) {
        e.classList.remove(className);
      }
    });
  }, []);

  return [onClickHandler, active, currentElementRef, className];
};
