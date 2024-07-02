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
          <p>Lorem ullamco labore tempor consectetur reprehenderit cillum fugiat consectetur ex ad magna. Lorem et voluptate dolor aliquip ipsum ullamco adipisicing culpa proident eiusmod non mollit officia magna. Et aliquip est aliquip in et dolor. Occaecat laborum adipisicing eu id consectetur laboris duis irure. Id incididunt duis occaecat sit ipsum officia cupidatat voluptate excepteur et duis eu fugiat.</p>
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