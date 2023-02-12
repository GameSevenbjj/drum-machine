import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from "./Components/Buttons";
import Switch from "./Components/Switch";
import Screen from "./Components/Screen";
import { useEffect, useState } from "react";
import GithubCorner from "react-github-corner";

function App() {
  const [displayKey, setDisplayKey] = useState("Click a Button!");

  const [enabled, setEnabled] = useState(false);

  function playSound(selector, id, key) {
    const audio = document.getElementById(selector);
    audio.play();
    setDisplayKey(id, key);
    console.log(audio);
  }

  useEffect(() => {
    const myListener = (event) => {
      let song = sounds.find((sound) => sound.key === event.key.toUpperCase());
      playSound(event.key.toUpperCase(), song.id);
    };

    if (enabled) {
      document.addEventListener("keydown", myListener);
    }
    if (!enabled) {
      document.removeEventListener("keydown", myListener);
    }
    return () => {
      document.removeEventListener("keydown", myListener);
    };
    // eslint-disable-next-line
  }, [enabled]);

  const setPowerState = () => {
    setEnabled(!enabled);
  };

  const sounds = [
    {
      keyCode: 81,
      key: "Q",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      key: "W",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      key: "E",
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      key: "A",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      key: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      key: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      key: "Z",
      id: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      key: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      key: "C",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  return (
    <div className="drum-machine">
      <div className="box" id="drum-machine">
        <Screen id="display" displayKey={displayKey} enabled={enabled} />
        <Switch enabled={enabled} setPowerState={setPowerState} />
        <Buttons enabled={enabled} sounds={sounds} playSound={playSound} />
      </div>
      <GithubCorner href="https://github.com/GameSevenbjj/drum-machine" />
    </div>
  );
}

export default App;
