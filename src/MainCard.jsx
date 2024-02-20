import { useState } from "react";
import LinkCard from "./LinkCard";
import "./MainCard.css";
import profile from "./profile.jpg";

const green = { backgroundColor: "Green" };
const blue = { backgroundColor: "Blue" };

function MainCard() {
  const [color, setColor] = useState(green);

  function colorChange() {
    return setColor(blue);
  }

  function Linkname({ title }) {
    return (
      <div className="linkcard" onMouseEnter={colorChange} style={color}>
        <h3>{title}</h3>
        {/* <button>{title}</button> */}
      </div>
    );
  }
  return (
    <div className="maincard">
      <img src={profile}></img>
      <h2 className="author">Christopher Udobi</h2>
      <h3 className="location">Calgary, Alberta</h3>
      <p className="job">Frontend Developer & Project Manager</p>

      <Linkname title={"Linkedin"}></Linkname>
      <Linkname title="GitHub"></Linkname>
      <Linkname title="Instagram"></Linkname>
      <Linkname title="Twitter"></Linkname>
      <Linkname title="Foundation"></Linkname>

      {/* <LinkCard></LinkCard>
      <LinkCard></LinkCard>
      <LinkCard></LinkCard>
      <LinkCard></LinkCard> */}
    </div>
  );
}

export default MainCard;
