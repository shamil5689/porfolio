import React, { FC } from "react";
import { Skill } from "../types";

interface Props {
  skill: Skill;
  changeSkill: (skill: Skill) => void;
  experienceIndex?: string;
}

const Experience: FC<Props> = ({ skill, changeSkill }) => {
  return (
    <li className="max-w-[245px]">
      {" "}
      <p className="relative before:content-['\2014'] before:mr-2 inline-block">
        {skill.name}{" "}
        <button className="mainButtonExperience">
          <input
            className="w-[20px] outline-none"
            type="number"
            defaultValue={skill.experience}
            min={0}
            max={30}
            onChange={(event) => {
              changeSkill({ ...skill, experience: Number(event.target.value) });
            }}
          />
          years
        </button>
      </p>
    </li>
  );
};

export default Experience;
