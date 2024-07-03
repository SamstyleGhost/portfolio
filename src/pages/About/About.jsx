import "./about.css";

import { gmail, github, linkedin } from "../../assets";

const About = () => {
  return (
    <div class="about__main">
      <div class="about__container">
        <div class="profile_image"></div>
        <div class="about_desc">
          <h1>Rohan Barde</h1>
          <h2>Software Engineer</h2>
          <div>
            <h4>B.Tech in Computer Engineering, VIT Pune 2021-2025</h4>
            <h4>CGPA: 8.65</h4>
          </div>
          <p>A passionate music lover ( & music producer ), I decided to try my hand at frontend programming as a way of letting my creativity flow and bring beautiful designs to life. Soon, fell in love with programming itself and currently learning and striving to build and understand systems & applications that are not only visually attractive but also allow for seamless and efficient way of living.</p>
        </div>
        <div class="socials">
          <a href="https://github.com/SamstyleGhost">
            <img src={github} width={35} height={35} />
          </a>
          <a href="https://www.linkedin.com/in/rohan-barde-885795230/">
            <img src={linkedin} width={38} height={38} />
          </a>
          <a href="mailto:rohancrrm@gmail.com" target="_blank">
            <img src={gmail} width={44} height={44} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About