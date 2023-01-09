import "./Card.css";

import { Link } from "react-router-dom";

const Card = ({ double = false, link, children, styleName, id }) => {
  // handles card gloss on mousemove
  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return link ? (
    <Link
      id={id}
      to={link}
      className={`card h-72 border border-neutral-800 bg-stone-900 rounded-lg flex justify-center items-center relative cursor-pointer ${styleName} ${
        double && "col-span-2"
      }`}
      onMouseMove={handleOnMouseMove}
    >
      <div className="card-content w-[calc(100%-2px)] h-[calc(100%-2px)] bg-stone-900 z-[2] rounded-[inherit] relative flex flex-col justify-center items-center">
        {children}
      </div>
    </Link>
  ) : (
    <div
      id={id}
      className={`card h-72 border border-neutral-800 bg-stone-900 rounded-lg flex justify-center items-center relative ${styleName} ${
        double && "col-span-2"
      }`}
      onMouseMove={handleOnMouseMove}
    >
      <div className="card-content w-[calc(100%-2px)] h-[calc(100%-2px)] bg-stone-900 z-[2] rounded-[inherit] relative flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Card;
