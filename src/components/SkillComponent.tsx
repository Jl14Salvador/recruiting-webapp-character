import { useState } from "react";

interface SkillComponentProps {
  skill: string;
}

function SkillComponent({ skill }: SkillComponentProps) {
  const [skillCount, setSkillCount] = useState(0);

  return (
    <div>
      <span>
        {skill}: {skillCount}
      </span>
      <span className="modifier">Modifier: ''</span>
      <button
        style={{ marginLeft: "6px" }}
        onClick={() => setSkillCount(skillCount + 1)}
      >
        +
      </button>
      <button onClick={() => setSkillCount(skillCount - 1)}>-</button>
    </div>
  );
}

export default SkillComponent;
