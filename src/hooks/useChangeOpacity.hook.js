import { useEffect } from "react";

export const useChangeOpacity = (boolean) => {
  useEffect(() => {
    if (!boolean) return;
    const element = document.querySelectorAll(".element");
    element.forEach((e, i) => {
      e.classList.add("element__opacity");
      setTimeout(() => {
        e.classList.remove("element__opacity");
      }, i * 100);
    });
  }, []);
};
