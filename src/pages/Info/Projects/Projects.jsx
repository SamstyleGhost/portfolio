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
          description="Used various AWS services to build a music player application connected with the cloud. Had features such as login / signup using AWS Cognito, different databases for different use cases (DynamoDB for user profiles, RDS for song metadata, S3 buckets for song files), creatiing / deleting playlists, adding own songs. REST APIs have been implemented using API Gateway and connected to the application using AWS Lambda. It also has a CDN layer in the form of Cloudfront."
        />
        <Project
          title="An AI Legal Assistant - Better Call AI"
          stack={["NextJS", "Supabase", "MongoDB", "TailwindCSS", "OpenAI", "Python"]}
          description="Trained a chatbot on the Indian Legal System. Built as a group project, designed and developed the database (Supabase to store the vector embeddings, MongoDB to store the legal ontology), built a pipeline using a python script that used Puppeteer & Cheerios to scrape the indiacode.nic.in website and build chunks, create vector embeddings, store in the database along with the actual text and metadata, seperate out the legal ontology and store in a database for better context"
        />
        <Project
          title="Crypto Monitoring Tool - Nelson&Murdock"
          stack={["Django", "Neo4J", "SolidJS"]}
          description="This was a group project built to visualize the graph network, the ins and outs transactions of a bitcoin wallet / transaction. Used web scraping methods to get list of transactions of a bitcoin address, and using Cypher Query Language, built a network of connected addresses, ran algorithms like PageRank and GraphSAGE on the network for additional information of the graph. The graph was also displayed visually in the frontend using VisJS library in SolidJS."
        />
        <Project
          title="Video Conferencing Webapp - RTChat"
          stack={["SolidJS", "ReactJS", "NodeJS", "Socket.io", "PeerJS"]}
          description="Learnt and used the concepts of WebSockets and WebRTC to build a video conferencing application that allowed users to connect in a group call with the features of mute / unmute audio, enable / disable video, in-meet chat. The frontend is made using SolidJS (initially it was made with React, but built again with SolidJS) while the backend is made using NodeJS & Socket.io for the websocket connections."
        />
        <Project
          title="Custom Compiler"
          stack={["C++"]}
          description="Building a custom language to implement Compiler Design principles. It is currently a work in progress."
        />
      </div>
    </section>
  )
}

export default Projects;
