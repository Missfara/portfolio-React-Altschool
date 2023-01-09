import React from "react";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

let Header = () => {
  const [menu, setMenu] = useState(false);

  let click = () => {
    setMenu((preMenu) => !preMenu);
  };

  useEffect(() => {
    console.log(menu);
  }, [menu]);

  return (
    <div>
      <button onClick={click}>
        <FaBars />
      </button>
      <div className="grad">
        <h1>
          <span>Hi,</span> i am Faramoluwa Faluyi
        </h1>
        <h3>A FRONTEND DEVELOPER</h3>
        <div className="col">
          {menu ? (
            <div className="sidenav">
              <a href="#about">About</a>
              <a href="#skill">Skills</a>
              <a href="#project">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          ) : null}
        </div>
        <img src="pict.jpeg" className="pic" alt="pic" />
        <p>
          Faramoluwa is an aspiring software developer with loads of content to
          consume and with the right frame of mind, zeal and energy to match
          whatever challenges i meet on becoming one of the best Programmers
          soon.
        </p>
      </div>
    </div>
  );
};

export default Header;
