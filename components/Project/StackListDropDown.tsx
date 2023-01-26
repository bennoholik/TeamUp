import classNames from "classnames";
import React, { useState } from "react";

interface props {
  stacks: string[];
  setStacks: React.Dispatch<React.SetStateAction<string[]>>;
}
// 여기도 컴포넌트 정리 필요할듯
export const StackListDropdown = ({ stacks, setStacks }: props) => {
  const [FStoggle, setFStoggle] = useState(false);
  const [BStoggle, setBStoggle] = useState(false);
  const [DStoggle, setDStoggle] = useState(false);
  const frontStackData = [
    "React",
    "Vue Js",
    "Javascript",
    "TypeScript",
    "Next Js",
    "Angular Js",
  ];
  const backStackData = [
    "Java",
    "Spring Boot",
    "Node Js",
    "Python",
    "Django",
    "C++",
    "C#",
    "MYSQL",
    "Oracle",
  ];
  const designStackData = [
    "Figma",
    "Adobe XD",
    "Sketch",
    "Illustrator",
    "Photoshop",
  ];

  const onStacksHandler = (stack: string) => () => {
    if (stacks.includes(stack)) {
      setStacks((prev) => prev.filter((v) => v !== stack));
    } else {
      setStacks((prev) => [...prev, stack]);
    }
  };
  return (
    <div className="my-3 pt-1 space-y-6">
      <>
        <div className="flex gap-2">
          <button
            className="text-[14px] cursor-pointer"
            onClick={() => setFStoggle(!FStoggle)}
          >
            프론트엔드{" "}
          </button>
          <div
            className="py-[6px] cursor-pointer"
            onClick={() => setFStoggle(!FStoggle)}
          >
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.31928 0.227325C1.17056 0.084448 0.973873 0.00666469 0.77064 0.0103619C0.567406 0.0140592 0.373499 0.0989484 0.229769 0.247145C0.0860385 0.395342 0.00370804 0.595276 0.000122219 0.804826C-0.0034636 1.01438 0.0719752 1.21718 0.210546 1.37051L5.4404 6.76291C5.51326 6.83807 5.59976 6.8977 5.69497 6.93838C5.79018 6.97906 5.89223 7 5.99529 7C6.09835 7 6.20041 6.97906 6.29562 6.93838C6.39083 6.8977 6.47733 6.83807 6.55018 6.76291L11.78 1.37051C11.9229 1.21789 12.0019 1.01353 12 0.801452C11.9981 0.589372 11.9155 0.386539 11.77 0.23664C11.6245 0.0867408 11.4277 0.00176959 11.222 2.73278e-05C11.0163 -0.00171493 10.8182 0.0799112 10.6703 0.227325L5.99477 5.04705L1.31928 0.227325Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        {FStoggle ? (
          <ul className="grid gap-1 w-full grid-cols-3">
            {frontStackData?.map((fsd, idx) => (
              <li key={idx}>
                <button
                  className={classNames(
                    "inline-flex p-2 w-full text-[14px] text-gray-300 border border-gray-300 cursor-pointer",
                    {
                      "text-blue-500 ring-blue-500 ring-[1px] border-transparent":
                        stacks.includes(fsd),
                    }
                  )}
                  onClick={onStacksHandler(fsd)}
                >
                  {fsd}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </>
      <>
        <div className="flex gap-2">
          <button
            className="text-[14px] cursor-pointer"
            onClick={() => setBStoggle(!BStoggle)}
          >
            백엔드{" "}
          </button>
          <div
            className="py-[6px] cursor-pointer"
            onClick={() => setBStoggle(!BStoggle)}
          >
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.31928 0.227325C1.17056 0.084448 0.973873 0.00666469 0.77064 0.0103619C0.567406 0.0140592 0.373499 0.0989484 0.229769 0.247145C0.0860385 0.395342 0.00370804 0.595276 0.000122219 0.804826C-0.0034636 1.01438 0.0719752 1.21718 0.210546 1.37051L5.4404 6.76291C5.51326 6.83807 5.59976 6.8977 5.69497 6.93838C5.79018 6.97906 5.89223 7 5.99529 7C6.09835 7 6.20041 6.97906 6.29562 6.93838C6.39083 6.8977 6.47733 6.83807 6.55018 6.76291L11.78 1.37051C11.9229 1.21789 12.0019 1.01353 12 0.801452C11.9981 0.589372 11.9155 0.386539 11.77 0.23664C11.6245 0.0867408 11.4277 0.00176959 11.222 2.73278e-05C11.0163 -0.00171493 10.8182 0.0799112 10.6703 0.227325L5.99477 5.04705L1.31928 0.227325Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        {BStoggle ? (
          <ul className="grid gap-1 w-full grid-cols-3">
            {backStackData?.map((fsd, idx) => (
              <li key={idx}>
                <button
                  className={classNames(
                    "inline-flex p-2 w-full text-[14px] text-gray-300 border border-gray-300 cursor-pointer",
                    {
                      "text-blue-500 ring-blue-500 ring-[1px] border-transparent":
                        stacks.includes(fsd),
                    }
                  )}
                  onClick={onStacksHandler(fsd)}
                >
                  {fsd}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </>
      <>
        <div className="flex gap-2">
          <button
            className="text-[14px] cursor-pointer"
            onClick={() => setDStoggle(!DStoggle)}
          >
            디자이너{" "}
          </button>
          <div
            className="py-[6px] cursor-pointer"
            onClick={() => setDStoggle(!DStoggle)}
          >
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.31928 0.227325C1.17056 0.084448 0.973873 0.00666469 0.77064 0.0103619C0.567406 0.0140592 0.373499 0.0989484 0.229769 0.247145C0.0860385 0.395342 0.00370804 0.595276 0.000122219 0.804826C-0.0034636 1.01438 0.0719752 1.21718 0.210546 1.37051L5.4404 6.76291C5.51326 6.83807 5.59976 6.8977 5.69497 6.93838C5.79018 6.97906 5.89223 7 5.99529 7C6.09835 7 6.20041 6.97906 6.29562 6.93838C6.39083 6.8977 6.47733 6.83807 6.55018 6.76291L11.78 1.37051C11.9229 1.21789 12.0019 1.01353 12 0.801452C11.9981 0.589372 11.9155 0.386539 11.77 0.23664C11.6245 0.0867408 11.4277 0.00176959 11.222 2.73278e-05C11.0163 -0.00171493 10.8182 0.0799112 10.6703 0.227325L5.99477 5.04705L1.31928 0.227325Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        {DStoggle ? (
          <ul className="grid gap-1 w-full grid-cols-3">
            {designStackData?.map((fsd, idx) => (
              <li key={idx}>
                <button
                  className={classNames(
                    "inline-flex p-2 w-full text-[14px] text-gray-300 border border-gray-300 cursor-pointer",
                    {
                      "text-blue-500 ring-blue-500 ring-[1px] border-transparent":
                        stacks.includes(fsd),
                    }
                  )}
                  onClick={onStacksHandler(fsd)}
                >
                  {fsd}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </>
    </div>
  );
};
