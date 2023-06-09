import React from "react";
import girl from "../assets/girl.png";
import CourseCards from "./CourseCards";
import Reasons from "./Rreasons";
import ExploreTeachers from "./ExploreTeachers";
import CourseCategory from "./CourseCategory";
import ClientTestimonial from "./ClientTestimonial";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <div className="bg-teal-800 flex items-center h-[680px] -mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row md:flex-row md:justify-between gap-40 items-center h-full">
          <div className="text-white text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">
              Start learning <br />
              from the world's <br />
              best learning institutions
            </h1>
            <h2 className="text-xl mb-4">
              Build skills with Courses, Certificates, and degrees <br />
              Online from the World-class Universities.
            </h2>
            <button className="bg-white text-teal-800 py-2 px-4 rounded-lg text-lg font-bold hover:bg-teal-700 hover:text-white">
              Register
            </button>
          </div>
          <div className="hidden md:block flex-1 h-auto">
            <img className="h-full object-cover" src={girl} alt="Girl" />
          </div>
        </div>
      </div>

      {/* Course Cards */}
      <CourseCards />

      {/* why E-learing works */}
      <Reasons />

      {/* Explore Teachers */}
      <ExploreTeachers />

      {/* Course catergory */}
      <CourseCategory/>

      {/* ClientTestimonial */}
      <ClientTestimonial/>

      {/* Footer */}
      <Footer/>

    </>
  );
}

export default HomePage;
