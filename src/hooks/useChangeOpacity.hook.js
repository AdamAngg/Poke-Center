import { useEffect } from "react";

export const useChangeOpacity = () => {
  useEffect(() => {
    const element = document.querySelectorAll(".element");
    element.forEach((e, i) =>
      setTimeout(() => {
        e.classList.add("element__opacity");
      }, i * 100)
    );
  }, []);
};
