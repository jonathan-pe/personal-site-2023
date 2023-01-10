import "./Home.css";

import anime from "animejs";
import { useEffect } from "react";
import { Code, GameController, MusicNotes } from "phosphor-react";
import { Link } from "react-router-dom";

import mePhoto from "../images/me.jpg";

const Home = () => {
  //handle card animations
  useEffect(() => {
    const topRowTimeLine = anime.timeline({
      easing: "easeOutExpo",
      duration: 600,
    });

    const botRowTimeLine = anime.timeline({
      easing: "easeOutExpo",
      duration: 400,
    });

    topRowTimeLine
      .add({
        targets: "#photoCard",
        translateX: [-250, 0],
        opacity: [0, 1],
      })
      .add({
        targets: "#infoCard",
        translateX: [-250, 0],
        opacity: [0, 1],
      });

    botRowTimeLine
      .add({
        targets: "#engineeringCard",
        translateX: [250, 0],
        opacity: [0, 1],
      })
      .add({
        targets: "#gamingCard",
        translateX: [250, 0],
        opacity: [0, 1],
      })
      .add({
        targets: "#musicCard",
        translateX: [250, 0],
        opacity: [0, 1],
      });
  }, []);

  // handles card gloss on mousemove
  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div
        id="cards"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl w-[calc(100%-1.25rem)] gap-4 items-center justify-center mx-0"
      >
        {/* top row */}
        <div
          id="photoCard"
          className="h-72 border border-neutral-800 bg-stone-900 rounded-lg flex justify-center items-center relative"
        >
          <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] bg-stone-900 z-[2] rounded-[inherit] relative flex flex-col justify-center items-center">
            <img
              alt="me on a boat with SF in the background"
              className="object-cover w-full h-full block m-auto rounded-[inherit]"
              src={mePhoto}
            />
          </div>
        </div>
        <div
          id="infoCard"
          className="h-72 border border-neutral-800 bg-stone-900 rounded-lg flex justify-center items-center relative lg:col-span-2"
        >
          <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] bg-stone-900 z-[2] rounded-[inherit] relative flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-start w-full h-full p-10">
              <span className="text-6xl font-bold">Jonathan Pe</span>
              <span className="font-medium">always learning.</span>
            </div>
          </div>
        </div>
        {/* bottom row */}
        <Link
          id="engineeringCard"
          to="/engineering"
          className="card h-72 border border-neutral-800 bg-stone-900 rounded-lg flex justify-center items-center relative cursor-pointer"
          onMouseMove={handleOnMouseMove}
        >
          <div className="card-content w-[calc(100%-2px)] h-[calc(100%-2px)] bg-stone-900 z-[2] rounded-[inherit] relative flex flex-col justify-center items-center">
            <Code size={64} />
          </div>
        </Link>
        <Link
          id="gamingCard"
          to="/gaming"
          className="card h-72 border border-neutral-800 bg-stone-900 rounded-lg flex justify-center items-center relative cursor-pointer"
          onMouseMove={handleOnMouseMove}
        >
          <div className="card-content w-[calc(100%-2px)] h-[calc(100%-2px)] bg-stone-900 z-[2] rounded-[inherit] relative flex flex-col justify-center items-center">
            <GameController size={64} />
          </div>
        </Link>
        <Link
          id="musicCard"
          to="/music"
          className="card h-72 border border-neutral-800 bg-stone-900 rounded-lg flex justify-center items-center relative cursor-pointer"
          onMouseMove={handleOnMouseMove}
        >
          <div className="card-content w-[calc(100%-2px)] h-[calc(100%-2px)] bg-stone-900 z-[2] rounded-[inherit] relative flex flex-col justify-center items-center">
            <MusicNotes size={64} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
