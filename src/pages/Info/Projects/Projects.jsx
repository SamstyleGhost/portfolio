import { For } from "solid-js";
import "./projects.css";

const Project = (props) => {
  return (    
    <div class="project__container">
      <h3>{props.title}</h3>
      <div>
        <For each={props.stack}>
          {(item) => <p>{item}</p>}
        </For>
      </div>
      <p>{props.description}</p>
    </div>
  )
}

const Projects = () => {
  return (
    <section class="projects__container">
      <h4>Projects</h4>
      <div>
        <Project 
          title="Cloud based music player using AWS services - Miles Music" 
          stack={["RDS", "S3", "DynamoDB", "Lambda", "API Gateway", "CloudFront", "Cognito", "SolidJS", "TailwindCSS"]}
          description="Laboris excepteur quis incididunt non deserunt officia ipsum eu amet veniam dolore sunt elit eu. Enim labore dolore consectetur officia nulla. Id veniam mollit commodo veniam irure sint mollit sint amet sit cillum mollit ex cillum. Eiusmod magna laboris sit laborum. Nulla elit dolor proident consequat cillum dolore. Et sint aliqua mollit ex laboris consectetur aliquip culpa sint. Proident elit irure sunt esse id elit sunt culpa ea."
        />
        <Project 
          title="An AI Legal Assistant - Better Call AI" 
          stack={["NextJS", "Supabase", "MongoDB", "TailwindCSS", "OpenAI", "Python"]}
          description="Nulla dolore laborum pariatur elit eu quis. Incididunt id nostrud ad do sit. Do elit ex incididunt reprehenderit culpa nisi elit. Velit veniam velit nostrud nisi ex non sint tempor minim commodo anim. Quis magna elit aute irure magna tempor occaecat nulla non sunt dolor quis culpa anim. In aute sunt deserunt dolor incididunt cillum officia occaecat ut mollit magna fugiat nulla ut. Enim sunt elit id proident quis dolore anim commodo commodo aliqua incididunt occaecat veniam."
        />
        <Project 
          title="Crypto Monitoring Tool - Nelson&Murdock" 
          stack={["Django", "Neo4J", "ReactJS"]}
          description="Exercitation cillum in reprehenderit deserunt mollit est in enim commodo. Ad in minim est velit amet esse in exercitation consectetur voluptate eiusmod culpa incididunt elit. Aute cillum magna do labore eiusmod quis fugiat consequat velit consequat nulla. Duis nulla velit irure eu adipisicing magna Lorem fugiat anim fugiat occaecat. Nostrud fugiat laboris amet laboris. Sit ipsum non incididunt sit magna do cupidatat. Irure ipsum tempor cillum et consectetur nulla ea laborum occaecat sint mollit ut elit dolor."
        />
        <Project 
          title="Video Conferencing Webapp - RTChat"
          stack={["SolidJS", "NodeJS", "Socket.io", "PeerJS"]}
          description="Ex dolore ullamco nisi amet mollit anim duis laboris velit tempor proident nulla occaecat. Non veniam sunt duis laboris deserunt elit nostrud eiusmod eiusmod minim adipisicing ea quis deserunt. Dolore Lorem cupidatat deserunt duis minim Lorem ex adipisicing reprehenderit. Ipsum sunt cupidatat Lorem irure sunt elit. Velit et exercitation consequat officia Lorem Lorem."
        />
        <Project 
          title="Custom Compiler"
          stack={["C++"]}
          description="Tempor veniam sunt do deserunt ut ullamco labore amet proident sint nulla velit. Incididunt proident velit pariatur ullamco exercitation Lorem consequat do non pariatur exercitation nostrud. Ea irure duis tempor aute ut Lorem qui incididunt cillum id. Nulla aliquip eiusmod anim mollit deserunt velit aliqua aliqua magna incididunt eiusmod elit ad commodo."
        />
      </div>
    </section>
  )
}

export default Projects;