import { useState } from "react";
import { SKILL_LIST } from "../consts";
import SkillComponent from "./SkillComponent";

function SkillsList() {
  const [skillPoints, setSkillPoints] = useState(10);
  return (
    <>
      <div className="content-box">
        <h2>Skills</h2>
        <p> Total Skills Points Available: {skillPoints}</p>
        <div id="SkillsList">
          {SKILL_LIST.map((skill) => {
            return <SkillComponent skill={skill.name} />;
          })}
        </div>
      </div>
    </>
  );
}

export default SkillsList;
