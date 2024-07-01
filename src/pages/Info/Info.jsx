import "./info.css";

import Experience from "./Experience/Experience"
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills"

const Info = () => {
  return (
    <div class="info__main">
      <Experience />
      <Skills />
      <Projects />
    </div>
  )
}

export default Info;