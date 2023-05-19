import { GenerationButton } from "./GenerationButton";
import { links } from "./Generations.data";
export const Generations = () => {
  return (
    <div className="generations-container">
      {Object.entries(links).map(([key, value], id) => (
        <GenerationButton key={key} name={key} value={value} id={id + 1} />
      ))}
    </div>
  );
};
