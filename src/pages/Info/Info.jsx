import { Motion } from "solid-motionone";

import "./info.css";

import Experience from "./Experience/Experience"
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills"
import Certifications from "./Certifications/Certifications";

const Info = () => {
  return (
    <Motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 2, easing: "ease-in-out" }}
      class="info__main">
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
    </Motion.div>
  )
}

export default Info;
