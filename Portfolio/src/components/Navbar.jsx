import { useState } from "react";
import Skills from "./Skills";
import Projects from "./Projects";

const Navbar = () => {
  const [showSkills, setShowSkills] = useState(true);
  const [showProjects, setShowProjects] = useState(false);

  const handleSkillBtnClick = () => {
    setShowSkills(true);
    setShowProjects(false);
  };

  const handleProjectBtnClick = () => {
    setShowSkills(false);
    setShowProjects(true);
  };

  return (
    <>
      <div className="nav-bar">
        <button id="skill-btn" onClick={handleSkillBtnClick}>
          Skills
        </button>
        <button id="project-btn" onClick={handleProjectBtnClick}>
          Projects
        </button>
      </div>
      {showSkills && <Skills />}
      {showProjects && <Projects />}
    </>
  );
};

export default Navbar;
