import "./info.css";

import Experience from "./Experience/Experience"
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills"
import Certifications from "./Certifications/Certifications";

const Info = () => {
  return (
    <div class="info__main">
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
    </div>
  )
}

export default Info;