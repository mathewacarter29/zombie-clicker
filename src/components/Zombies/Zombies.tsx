import zombie from "../../assets/zombie.png";

function Zombies() {
  function getRandomIntInclusive(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const NUM_ZOMBIES = 10;
  function renderZombies(numZombies: number) {
    let arr = [];
    for (let i = 0; i < numZombies; i++) {
      const x = getRandomIntInclusive(10, 90);
      const y = getRandomIntInclusive(10, 90);
      const image = (
        <img
          key={i}
          src={zombie}
          style={{
            width: 90,
            height: 90,
            position: "absolute",
            left: x + "%",
            top: y + "%",
          }}
          onClick={() => zombieClick()}
        />
      );
      arr.push(image);
    }
    return arr;
  }

  function zombieClick() {
    console.log("clicked");
  }
  return <div>{renderZombies(NUM_ZOMBIES)}</div>;
}

export default Zombies;
