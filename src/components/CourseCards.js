import React from "react";
import courses from "../data/courses.json";

const CourseCards = () => {
  console.log(courses)
  return (
    <div>
      <h1 className="text-center text-5xl mt-4 mb-10 font-bold text-blue-900">Explore Top Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-8 my-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-48 object-fill" />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">{course.title.slice(0,25) + '...'}</h2>
              <p className="text-gray-700 text-base">{course.description.slice(0,100) + "..."}</p>
              <ul className="mt-2 text-sm text-gray-600">
                <li>Duration: {course.duration}</li>
                <li>Level: {course.level}</li>
              </ul>
              <a href={course.video} className="mt-4 block text-center bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:shadow-outline">Watch Now</a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 mb-8 rounded">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default CourseCards;
