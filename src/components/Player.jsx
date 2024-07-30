import { useRef, useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);
  const name = useRef();
  const clickHandler = () => {
    setPlayerName(name.current.value);
    playerName.current.value = " ";
  };
  return (
    <section id="player">
      <h2>Welcome {playerName ?? " unknown entity"}</h2>
      <p>
        <input ref={name} type="text" />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
