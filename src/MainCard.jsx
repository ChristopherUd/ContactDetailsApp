import { useState } from "react";
import LinkCard from "./LinkCard";
import "./MainCard.css";
import profile from "./profile.jpg";

const grey = { backgroundColor: "Grey" };
const green = { backgroundColor: "hsl(75, 94%, 57%)" };

function MainCard() {
  function Linkname({ title, link }) {
    const [color, setColor] = useState(grey);

    function colorChange() {
      return setColor(green);
    }

    function colorDefault() {
      return setColor(grey);
    }
    return (
      <div
        className="linkcard"
        onMouseEnter={colorChange}
        style={color}
        onMouseLeave={colorDefault}
      >
        {/* <h3>{title}</h3> */}
        <a href={link}>{title}</a>
        {/* <button>{title}</button> */}
      </div>
    );
  }
  return (
    <div className="maincard">
      <img src={profile}></img>
      <h2 className="author">Christopher Udobi</h2>
      <h3 className="location">Calgary, Alberta</h3>
      <p className="job">Frontend Developer & Aerospace Project Engineer</p>

      <Linkname
        title={"Linkedin"}
        link={"https://www.linkedin.com/in/christopher-udobi-67b91b1b8/"}
      ></Linkname>
      <Linkname
        title="GitHub"
        link={"https://github.com/ChristopherUd"}
      ></Linkname>
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
