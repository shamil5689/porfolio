import _ from "lodash";
import { useMemo, useCallback, FC, useState } from "react";
import useLocalStorage from "use-local-storage";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import SampleCode from "../components/SampleCode";
import { Skills, Skill } from "../types";

const Home: FC = () => {
  const [skills, setSkills] = useLocalStorage<Skills>("skills", []);

  const sortedSkills = useMemo(
    () => _.orderBy(skills, "experience", "desc"),
    [skills]
  );

  const [textLocation, setTextLocation] = useLocalStorage("textLocation", []);
  const [textFirstName, setTextFirstName] = useLocalStorage(
    "textFirstName",
    []
  );

  const changeSkill = useCallback(
    (skill: Skill) => {
      const modifiedSkills = [...skills];
      const skillIndex = _.findIndex(modifiedSkills, { id: skill.id });
      modifiedSkills.splice(skillIndex, 1, skill);
      setSkills(modifiedSkills);
    },
    [setSkills, skills]
  );

  return (
    <>
      <Header
        skills={sortedSkills}
        setSkills={setSkills}
        textLocation={textLocation}
        textFirstName={textFirstName}
        setTextLocation={setTextLocation}
        setTextFirstName={setTextFirstName}
      />
      <main>
        <div className="container pt-[48px] pb-[48px]">
          <ul className="flex flex-wrap gap-x-[33px] gap-y-[43px] max-[1140px]:justify-center">
            <Portfolio />
            <li
              className={skills.length !== 0 ? "w-[245px]" : "hidden w-[245px]"}
            >
              <h2 className="font-medium text-2xl mb-5">Experience</h2>
              <ul>
                {sortedSkills.map((skill, index) => (
                  <Experience
                    key={index}
                    skill={skill}
                    changeSkill={changeSkill}
                  />
                ))}
              </ul>
            </li>
            <li className="w-[265px]">
              <h2 className=" font-medium text-2xl mb-3">Sample code</h2>
              <SampleCode />
            </li>
            <li>
              <h2 className="font-medium text-2xl mb-5">Availability</h2>
              <p className="mb-[15px]">Full-time</p>
              <h2 className="font-medium text-xl mb-[10px]">
                Preferred Environment
              </h2>
              <p className="bg-limpid outline-none font-normal text-[16px] leading-6">
                GitHub, Mac OSX
              </p>
            </li>
            <li className="relative">
              <h2 className="font-medium text-2xl mb-9">
                The Most Amaizing...
              </h2>
              <blockquote>
                <p className="max-w-[245px] text-center bg-limpid outline-none font-normal text-[16px] before:bg-quoteBefore before:bg-no-repeat before:absolute before:top-[53px] before:left-0 before:w-[40px] before:h-[32px] after:bg-quoteAfter after:bg-no-repeat after:absolute after:top-[102px] after:w-[40px] after:h-[32px] leading-6 before:opacity-20 after:opacity-20">
                  The only true wisdom is in knowing you know nothing...
                </p>
              </blockquote>
            </li>
            <li className="relative">
              <h2 className="font-medium text-2xl mb-9">
                In clients I look for...
              </h2>
              <blockquote>
                <p className="max-w-[245px] text-center bg-limpid outline-none font-normal text-[16px] before:bg-quoteBefore before:bg-no-repeat before:absolute before:top-[53px] before:left-0 before:w-[40px] before:h-[32px] after:bg-quoteAfter after:bg-no-repeat after:absolute after:top-[122px] after:right-[21px] after:w-[40px] after:h-[32px] leading-6 before:opacity-20 after:opacity-20">
                  There is only one good, knowledge, and one evil, ignorance.
                </p>
              </blockquote>
            </li>
            <div className="iframe w-[552px] ">
              <iframe
                className="rounded-lg"
                width="100%"
                height="200"
                frameBorder="0"
                scrolling="no"
                src={`https://www.google.com/maps/embed/v1/place?q=${textLocation}&key=AIzaSyCHNLfo90MhcCZbmBjEcHxioKf4Y5n1scg`}
              >
                <a href="https://www.maps.ie/distance-area-calculator.html">
                  measure distance on map
                </a>
              </iframe>
            </div>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
