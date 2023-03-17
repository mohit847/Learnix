import React from "react";
import Personalized from "../assets/personalized.png";
import Trusted from "../assets/trusted.png";
import Prize from "../assets/prize.png";

const Reasons = () => {
  return (
    <div className=" flex flex-col items-center mx-auto py-10 px-4 mb-16 sm:px-6 lg:px-8 bg-[#1b3146]">
      <div className="text-5xl font-bold mb-20 text-center text-white">
        Why E-Learning Academy Works
      </div>
      <div className="flex flex-col md:flex-row  justify-between gap-20 items-center ">
        <div className="flex flex-col justify-center items-center md:mr-16 pt-14 ">
          <img
            className="w-40 "
            src={Personalized}
            alt="Personalized learning"
          />
          <h3 className="text-xl font-bold mt-8 mb-4 text-white ">
            Personalized Learning
          </h3>
          <p className="text-slate-500 text-center max-w-[250px] ">
            Challenge yourself and change your career with an 10-13.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center md:mx-8 pt-7">
          <img
            className="w-40"
            src={Trusted}
            alt=""
          />
          <h3 className="text-xl font-bold mt-8 mb-4 text-white ">
            Trusted content
          </h3>
          <p className="text-slate-500 text-center max-w-[250px] ">
            Challenge yourself and change your career with an 10-13.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center md:ml-16  pt-3">
          <img
            className="w-40 "
            src={Prize}
            alt=""
          />
          <h3 className="text-xl font-bold mt-8 mb-4 text-white ">
            Tools to empower teachers
          </h3>
          <p className="text-slate-500 text-center max-w-[250px] ">
            Challenge yourself and change your career with an 10-13.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
