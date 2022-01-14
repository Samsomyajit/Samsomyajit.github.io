import "./about.css";
import Award from "../../images/award.jpg";
import Coa from "../../images/coa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNpm,
  faReact,
  faNodeJs,
  faJava,
  faJs,
  faHtml5,
  faAws,
  faPython,
  faDev,
  faPhp,
  faVuejs,
  faCss3,
  faEmpire,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1-the-bookworm-carl-spitzweg.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
         I am a Full Stack Developer currently working for Virtusa, a recent Computer Science graduate.
         I am always looking for new opportunities, research projects and learning. 
        </p>
        <div className="a-desc">
          <p className="a-desc-text">
          Once upon a time there lived a gentleman... I am a textbook definition of this traditional noblesse.
          The coming of 21<sup>st</sup> century has seen technological marvels, explorations and innovations. 
          Even in this centuary I have "somehow" managed to preserve the chivalric code of honour and trust, while exploring
          the great scientific unknown. My family Coat-of-Arms charge is the noble fox, which signifies wisdom and loyalty, and my crest is the orange gryphon
          which represents ambition and leadership. I love to read wide variety of books especially classics and fantasy. 
          I also love long walks, educational debates, and writing.   
          </p>
          <img src={Coa} alt="" className="a-coa-img bg" />
        </div>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Intel&reg; Edge AI Scholarship 2019</h4>
            <p className="a-award-desc">
              Winner of Udacity's Intel&reg; Edge AI Scholarship 2019. 
              Successfully completed the following learning program. 
            </p>
          </div>
        </div>
        <div className="tech-stack">
              <FontAwesomeIcon className="npm" icon={faNpm} size="2x" />
              <FontAwesomeIcon className="react" icon={faReact} size="2x" />
              <FontAwesomeIcon className="html" icon={faHtml5} size="2x" />
              <FontAwesomeIcon className="node" icon={faNodeJs} size="2x" />
              <FontAwesomeIcon className="java" icon={faJava} size="2x" />
              <FontAwesomeIcon className="py" icon={faPython} size="2x" />
              <FontAwesomeIcon className="js" icon={faJs} size="2x" />
              <FontAwesomeIcon className="php" icon={faPhp} size="2x" />
              <FontAwesomeIcon className="aws" icon={faAws} size="2x" />
              <FontAwesomeIcon className="dev" icon={faDev} size="2x" />
              <FontAwesomeIcon className="vue" icon={faVuejs} size="2x" />
              <FontAwesomeIcon className="css" icon={faCss3} size="2x" />
              <FontAwesomeIcon className="emp" icon={faEmpire} size="2x" />
              <FontAwesomeIcon className="dck" icon={faDocker} size="2x" />
            </div>
      </div>
    </div>
  );
};

export default About;