import zombieImage from "../../assets/zombie.png";
import { useState } from "react";
import Window from "../Window/Window";
import classes from "./Zombies.module.css";

function Zombies() {
  const NUM_ZOMBIES = 10;
  type zombieSettings = {
    index: number;
    visible: boolean;
    x: number;
    y: number;
  };

  const [zombies, setZombies] = useState<zombieSettings[]>(
    initZombies(NUM_ZOMBIES)
  );
  const [won, setWon] = useState(false);

  function getRandomIntInclusive(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function initZombies(num: number): zombieSettings[] {
    let arr: zombieSettings[] = [];
    for (let i = 0; i < num; i++) {
      const x = getRandomIntInclusive(10, 90);
      const y = getRandomIntInclusive(10, 90);
      const setting: zombieSettings = {
        index: i,
        x,
        y,
        visible: true,
      };
      arr.push(setting);
    }
    return arr;
  }

  function zombieClick(index: number) {
    const newZombies = zombies.map((zombie, i) => {
      if (i === index) {
        return { ...zombie, visible: false };
      }
      return zombie;
    });
    setZombies(newZombies);
    checkForWin(newZombies);
  }

  function resetZombies(num: number) {
    setWon(false);
    setZombies(initZombies(num));
  }

  function checkForWin(zombieList: zombieSettings[]) {
    if (!zombieList.some((zombie) => zombie.visible)) {
      setWon(true);
    }
  }

  return (
    <div>
      <Window>
        {won ? (
          <div>
            <h1>You killed all the zombies!</h1>
            <h1>Click Restart to play again!</h1>
          </div>
        ) : (
          zombies.map((zombie) => {
            return (
              <img
                key={zombie.index}
                src={zombieImage}
                style={{
                  width: 90,
                  height: 90,
                  position: "absolute",
                  left: zombie.x + "%",
                  top: zombie.y + "%",
                  visibility: zombie.visible ? "visible" : "hidden",
                }}
                onClick={() => zombieClick(zombie.index)}
              />
            );
          })
        )}
      </Window>
      <button
        onClick={() => resetZombies(NUM_ZOMBIES)}
        className={classes.button}
      >
        Restart
      </button>
    </div>
  );
}

export default Zombies;
