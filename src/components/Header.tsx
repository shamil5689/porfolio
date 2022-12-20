import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Skills } from "../types";
import HeaderButtonPrint from "./HeaderButtonPrint";
import { UserPhoto } from "./UserPhoto";

interface Props {
  skills: Skills;
  setSkills: React.Dispatch<React.SetStateAction<Skills | undefined>>;
  textLocation: string[];
  textFirstName: string[];
  setTextLocation: (value: any) => void;
  setTextFirstName: (value: any) => void;
}

const Header: FC<Props> = ({
  skills,
  setSkills,
  textLocation,
  textFirstName,
  setTextLocation,
  setTextFirstName,
}) => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<FormInputs>({ mode: "all" });
  type FormInputs = {
    firstName: string;
    location: string;
    skills: string;
  };

  const [hidden, setHidden] = useState("hidden");
  const [hiddenButton, setHiddenButton] = useState("listItemsHeader");
  const onClickButton = () => {
    setHidden("block");
    setHiddenButton("hidden");
    setTimeout(() => {
      setFocus("skills");
    }, 0);
  };

  return (
    <header className="bg-lightGray min-h-[224px] ">
      <div className="container flex justify-between h-full pb-5 pt-[37px] pr-2 pl-2 max-[600px]:pr-1 max-[600px]:pl-1 max-[600px]:flex max-[600px]:flex-wrap max-[600px]:items-center max-[600px]:justify-center">
        <form
          className="flex max-[485px]:flex-wrap max-[485px]:items-center max-[485px]:justify-center"
          onSubmit={handleSubmit((data) => console.log(data, "data"))}
        >
          <UserPhoto />
          <div className="wrapper flex flex-col max-w-[350px] max-[485px]:max-w-[90%]">
            <div className="relative">
              <input
                type="text"
                value={textFirstName}
                {...register("firstName", {
                  required: true,
                  minLength: 5,
                  maxLength: 30,
                  pattern: /^[a-zA-Zа-яА-Я\s]+$/iu,
                  onChange(event) {
                    setTextFirstName(event.target.value);
                  },
                })}
                className={`w-full focus:border-b bg-limpid outline-none font-medium text-[40px] mb-[6px] pr-[25px] hover:bg-nameHover focus:bg-nameHover validatingInput ${
                  errors.firstName ? "border-b border-hover" : ""
                }`}
                placeholder="John Smith"
              />
              {errors?.firstName ? (
                <span
                  className={`hidden absolute h-3 w-3 top-[23px] right-[8px] bg-white`}
                >
                  <img src="/img/error.svg" alt="" />
                </span>
              ) : (
                <span
                  className={`hidden absolute h-3 w-3 top-[23px] right-[8px] bg-white`}
                >
                  <img src="/img/success.svg" alt="" />
                </span>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                value={textLocation}
                className={`focus:border-b w-full bg-limpid outline-none font-normal text-[16px] pr-[25px] leading-6 mb-[6px] focus:bg-nameHover hover:bg-nameHover validatingInput ${
                  errors.location ? "border-b border-hover" : ""
                }`}
                placeholder="Portland, Oregon, USA"
                {...register("location", {
                  onChange(event) {
                    setTextLocation(event.target.value);
                  },
                  required: true,
                  minLength: 5,
                  maxLength: 30,
                  pattern: /^[a-zA-Zа-яА-Я\s]+$/iu,
                })}
              />
              {errors.location ? (
                <span
                  className={`hidden absolute h-3 w-3 top-[4px] right-[8px] bg-white`}
                >
                  {<img src="/img/error.svg" alt="" />}
                </span>
              ) : (
                <span
                  className={`hidden absolute h-3 w-3 top-[4px] right-[8px] bg-white`}
                >
                  <img src="/img/success.svg" alt="" />
                </span>
              )}
            </div>
            <div className="wrapper mb-4">
              <i className="mr-3">🇬🇧</i>
              <p className="inline-block bg-limpid outline-none font-normal text-[16px] leading-6">
                English
              </p>
            </div>
            <ul className="flex flex-wrap">
              {skills.map((element, index) => (
                <li key={index} className="listItemsHeader">
                  {element.name}
                  <button
                    type="button"
                    className="button hidden absolute top-[-7px] w-[16px] h-[16px]"
                    onClick={() => {
                      const modifiedSkills = [...skills];
                      modifiedSkills.splice(index, 1);
                      setSkills(modifiedSkills);
                    }}
                  >
                    <img src="/img/error.svg" alt="" />
                  </button>
                </li>
              ))}
              <button
                type="button"
                className={hiddenButton}
                onClick={onClickButton}
              >
                +
              </button>
              <li className="w-[165px h-[24px] relative">
                <input
                  type="text"
                  className={`border-b bg-limpid outline-none font-medium text-[14px] mb-[20px] pr-[25px] focus:bg-nameHover hover:bg-nameHover ${hidden} ${
                    errors.skills ? "border-b border-hover" : ""
                  }`}
                  onKeyDown={(e) => {
                    if (
                      !errors?.skills &&
                      e.currentTarget.value !== "" &&
                      e.code === "Enter"
                    ) {
                      e.preventDefault();
                      setSkills([
                        ...skills,
                        {
                          id: Date.now(),
                          name: e.currentTarget.value,
                          experience: 0,
                        },
                      ]);
                    }
                  }}
                  {...register("skills", {
                    required: true,
                    minLength: 3,
                    maxLength: 30,
                    pattern: /^[a-zA-Zа-яА-Я\s]+$/iu,
                  })}
                />
                {errors?.skills ? (
                  <span
                    className={`absolute h-3 w-3 top-[4px] right-[4px] bg-white`}
                  >
                    <img src="/img/error.svg" alt="" />
                  </span>
                ) : (
                  <span
                    className={`absolute h-3 w-3 top-[3px] right-[4px] bg-white ${hidden}`}
                  >
                    <img src="/img/success.svg" alt="" />
                  </span>
                )}
              </li>
            </ul>
          </div>
        </form>
        <HeaderButtonPrint />
      </div>
    </header>
  );
};

export default Header;
