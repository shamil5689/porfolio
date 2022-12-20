import { FC } from "react";

const SampleCode: FC = () => {
  return (
    <pre className="flex bg-lightGray  rounded-lg max-w-[262px] p-[8px_0_14px_9px] max-lg:text-[10px]">
      <span className="flex flex-col text-xs font-normal leading-5 text-black opacity-20">
        <span>1.</span>
        <span>2.</span>
        <span>3.</span>
        <span>4.</span>
        <span>5.</span>
        <span>6.</span>
      </span>
      <code className="text-xs leading-5 font-normal ">
        &nbsp;&nbsp;{"<"}
        <span className="text-redDiv">div</span>&nbsp;
        <span className="text-attribute">class</span>
        <span>='</span>
        <span className="text-value">golden grid</span>
        <span>'{">"}</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<"}
        <span className="text-redDiv">div</span>&nbsp;
        <span className="text-attribute">style</span>
        <span>='</span>
        <span className="text-value">
          grid-area: <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 / 1 / span 10 /
          span
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12;
        </span>
        <span>'{">"}</span> <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"</"}</span>
        <span className="text-redDiv">div</span>
        <span>{">"}</span> <br />
        &nbsp;&nbsp;<span>{"</"}</span>
        <span className="text-redDiv">div</span>
        <span>{">"}</span>
      </code>
    </pre>
  );
};

export default SampleCode;
