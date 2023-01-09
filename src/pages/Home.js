import anime from "animejs";
import { useEffect } from "react";
import { Code, GameController, MusicNotes } from "phosphor-react";

import Card from "../components/Card";
import mePhoto from "../images/me.jpg";

const Home = () => {
  //handle card animations
  useEffect(() => {
    const topRowTimeLine = anime.timeline({
      easing: "easeOutExpo",
      duration: 700,
    });

    const botRowTimeLine = anime.timeline({
      easing: "easeOutExpo",
      duration: 500,
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

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div
        id="cards"
        className="grid grid-rows-2 grid-cols-3 max-w-5xl w-[calc(100%-1.25rem)] gap-4 items-center justify-center mx-0"
      >
        <Card id="photoCard">
          <img
            alt="photo of me with SF in the background"
            className="object-cover w-full h-full block m-auto rounded-[inherit]"
            src={mePhoto}
          />
        </Card>
        <Card double id="infoCard">
          <div className="flex flex-col justify-center items-start w-full h-full p-10">
            <span className="text-7xl font-bold">Jonathan Pe</span>
            <span className="font-medium">always learning.</span>
          </div>
        </Card>
        <Card link="/engineering" id="engineeringCard">
          <Code size={64} />
        </Card>
        <Card link="/gaming" id="gamingCard">
          <GameController size={64} />
        </Card>
        <Card link="/music" id="musicCard">
          <MusicNotes size={64} />
        </Card>
      </div>
    </div>
  );
};

export default Home;
