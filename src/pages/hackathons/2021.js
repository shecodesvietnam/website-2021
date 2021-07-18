import { assetsUrl } from "./../../config.json";
import { Player } from "video-react";

function Hackathon2021() {
  return (
    <>
      <article>
        <Player
          fluid
          playsInline
          autoPlay
          src={`${assetsUrl}/2021/hackathon/SheCodesHackathon2019.mp4`}
        />
      </article>
    </>
  );
}

export default Hackathon2021;
