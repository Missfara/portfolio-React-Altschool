import React from "react";

let Project = () => {
  return (
    <div id="project">
      <div>
        <h2> MY PROJECTS </h2>

        <p className="para">Just click on the links to view them</p>

        <div className="flx">
          <p className="flex">
            <img src="pro1.jpeg" className="logo  log" alt="log1" />
            <a
              href="http://zurislideshow.vercel.app/"
              target="self"
              className="block"
            >
              I did a picture slideshow using Html, Css and JavaScript
            </a>
          </p>
          <p className="flex">
            <img src="pro2.jpeg" className="logo  log" alt="log1" />
            <a
              href="http://counter-app-missfara.vercel.app/"
              target="self"
              className="block"
            >
              I created a project to Count numbers using Html, Css and React
            </a>
          </p>
          <p className="flex ">
            <img src="pro3.jpeg" className="logo  log" alt="log1" />
            <a
              href="http://random-users-one.vercel.app/"
              target="self"
              className="block"
            >
              I build a project of random users using Html, Css and React
            </a>
          </p>
          <p className="flex">
            <img src="pro4.jpeg" className="logo  log" alt="log1" />
            <a
              href="https://react-calculator-missfara.vercel.app/"
              target="self"
              className="block"
            >
              I build a Calculator using Html, Css and React
            </a>
          </p>
          <p className="flex">
            <img src="pro5.jpeg" className="logo  log" alt="log1" />
            <a
              href="http://new-folder-project-solar.vercel.app/"
              target=""
              className="block"
            >
              I build a solar planet project to calculate weight using
              Html, Css and Javascript
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Project;
