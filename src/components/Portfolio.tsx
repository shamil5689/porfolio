import React from "react";

const Portfolio = () => {
  return (
    <li className="w-[245px]">
      <h2 className="font-medium text-2xl mb-5">Portfolio</h2>
      <ul className="flex flex-col">
        <li className="before:content-['\2014'] before:mr-2 inline-block mb-[20px]">
          <a href="#" className="mainLinksPortfolio ">
            Bootstrap 4 Material Design
            <br />
            (Sample Link)
          </a>
        </li>
        <li className="before:content-['\2014'] before:mr-2 inline-block">
          <a href="#" className="mainLinksPortfolio">
            Modern JavaScript stack
          </a>
        </li>
        <li className="before:content-['\2014'] before:mr-2 inline-block">
          <a href="#" className="mainLinksPortfolio">
            Datepicker for twitter bootstrap
          </a>
        </li>
        <li className="before:content-['\2014'] before:mr-2 inline-block">
          <a href="#" className="mainLinksPortfolio">
            Fast and reliable Bootstrap
            <br />
            widgets in Angular
          </a>
        </li>
      </ul>
    </li>
  );
};

export default Portfolio;
