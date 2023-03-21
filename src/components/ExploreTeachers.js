import React from "react";
import girl from "../assets/girl.png";

function ExploreTeachers() {
  return (
    <div className="flex items-center h-[680px] -mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row md:flex-row md:justify-between gap-48 items-center h-full border-2 border-gray-800">
        <div className=" text-center md:text-left">
          <h1 className="text-4xl text-blue-900 font-bold mb-4">
            Courses taught by <br />
            industry leaders <br />
            around the world
          </h1>
          <h2 className="text-xl mb-4 max-w-md text-neutral-500">
            Build skills with Courses, Certificates, and degrees <br />
            Online from the World-class Universities Graduate This short quiz
            will sort you out. Anser a few simple course recommendations..
          </h2>
          <button className="bg-blue-700 text-white py-2 px-4 rounded-lg text-lg font-bold hover:bg-teal-700 hover:text-white">
            Register
          </button>
        </div>
        <div className="hidden md:block flex-1 h-auto">
          <img className="h-full object-cover" src={girl} alt="Girl" />
        </div>
      </div>
    </div>
  );
}

export default ExploreTeachers;
