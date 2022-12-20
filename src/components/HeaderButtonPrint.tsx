import { FC } from "react";

const HeaderButtonPrint: FC = () => {
  return (
    <button
      onClick={window.print}
      className="printBtn self-start text-link hover:text-hover font-normal text-base inline-flex hover:svg-fill-hover max-md:text-sm "
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="printSvg mr-2 max-md:mr-0"
      >
        <path
          d="M14 20H8V19H14V20ZM24 5V18H20V24H4V18H0V5H4V0H20V5H24ZM18 15H6V22H18V15ZM18 2H6V5H18V2ZM22 7.5C22 7.224 21.776 7 21.5 7C21.224 7 21 7.224 21 7.5C21 7.776 21.224 8 21.5 8C21.776 8 22 7.776 22 7.5ZM16 17H8V18H16V17Z"
          fill="#B3BAC0"
          className="path"
        />
      </svg>
      <span className="max-md:hidden">Print this page</span>
    </button>
  );
};

export default HeaderButtonPrint;
