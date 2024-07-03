import "./experience.css";

const Experience = () => {
  return (
    <section>
      <h4>Experience</h4>
      <ul>
        <li>
          <div>
            <h4>Software Engineering Intern</h4>
            <h4>-</h4>
            <a href="https://www.communitygaming.io/" target="_blank" rel="noopener"><h3>Community Gaming INC.</h3></a>
          </div>
          <div>
            <h5>NextJS, TailwindCSS, Strapi CMS, Stripe, Coinbase</h5>
            <p>Nov 2023 - Feb 2024</p>
          </div>
          <hr />
          <div>
            <p>I worked as an intern at Community Gaming INC. remotely as a part of a small team that designed and developed an application for the upcoming edition of 3XP Web3 Gaming Expo. You can check it out <a href="https://3xp.gg/3xp_2023">here.</a>My main work related to the building of the application in NextJS (using Tailwind) and Strapi as a Content Management System.Also integrated the application with Stripe as a payments provider.</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Experience;
