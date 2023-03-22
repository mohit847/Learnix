import React, { useState } from "react";
import penta from "../assets/penta.png";
import square from "../assets/square.png";
import triangle from "../assets/triangle.png";
import circle from "../assets/circle.png";

const tabs = [
  {
    title: "Design",
    subtitle:
      "Build skills with courses, certificates, and degrees online from world-class.",
    courses: [
      {
        title: "User Centered Design",
        subtitle: "(Beginner friendly)",
        icon: penta,
        icon1: "202 Lessons",
        icon2: "6k+ students",
        button: "Enroll",
      },
      {
        title: "Graphic Design",
        subtitle: "(Intermediate level)",
        icon: square,
        icon1: "150 Lessons",
        icon2: "3k+ students",
        button: "Enroll",
      },
      {
        title: "Design Thinking",
        subtitle: "(Advanced level)",
        icon: triangle,
        icon1: "100 Lessons",
        icon2: "2k+ students",
        button: "Enroll",
      },
      {
        title: "UI Design",
        subtitle: "(Expert level)",
        icon: circle,
        icon1: "75 Lessons",
        icon2: "1k+ students",
        button: "Enroll",
      },
    ],
  },
  {
    title: "Development",
    subtitle:
      "Build skills with courses, certificates, and degrees online from world-class.",
    courses: [
      {
        title: "Web Development",
        subtitle: "(Beginner friendly)",
        icon: penta,
        icon1: "150 Lessons",
        icon2: "5k+ students",
        button: "Enroll",
      },
      {
        title: "Mobile App Development",
        subtitle: "(Intermediate level)",
        icon: square,
        icon1: "120 Lessons",
        icon2: "2k+ students",
        button: "Enroll",
      },
      {
        title: "Game Development",
        subtitle: "(Advanced level)",
        icon: triangle,
        icon1: "90 Lessons",
        icon2: "1k+ students",
        button: "Enroll",
      },
      {
        title: "Full Stack Development",
        subtitle: "(Expert level)",
        icon: circle,
        icon1: "200 Lessons",
        icon2: "4k+ students",
        button: "Enroll",
      },
    ],
  },
  {
    title: "Marketing",
    subtitle:
      "Build skills with courses, certificates, and degrees online from world-class.",
    courses: [
      {
        title: "Digital Marketing",
        subtitle: "(Beginner friendly)",
        icon: penta,
        icon1: "180 Lessons",
        icon2: "4k+ students",
        button: "Enroll",
      },
      {
        title: "Social Media Marketing",
        subtitle: "(Intermediate level)",
        icon: square,
        icon1: "100 Lessons",
        icon2: "2k+ students",
        button: "Enroll",
      },
      {
        title: "Content Marketing",
        subtitle: "(Advanced level)",
        icon: triangle,
        icon1: "75 Lessons",
        icon2: "1k+ students",
        button: "Enroll",
      },
      {
        title: "Influencer Marketing",
        subtitle: "(Expert level)",
        icon: circle,
        icon1: "50 Lessons",
        icon2: "500+ students",
        button: "Enroll",
      },
    ],
  },
];

const CourseTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex flex-col items-center ">
      <h2 className="text-4xl font-bold text-center my-8 break-words">
        Browse Our Courses by Category
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center self-center my-14 max-w-7xl mx-auto ">
        <div className="flex flex-col ">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className={`px-4 py-12 cursor-pointer ${
                activeTab.title === tab.title
                  ? "bg-gray-500 backdrop-blur-lg"
                  : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <h2 className="text-3xl font-bold break-words">{tab.title}</h2>
              <p className="text-md py-1 max-w-sm break-words w-72 md:w-auto">
                {tab.subtitle}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8 p-4 border border-orange-800 ">
          {activeTab.courses.map((course) => (
            <div
              key={course.title}
              className="border rounded-lg shadow-md"
            >
              <img src={course.icon} className="w-10 m-8" alt="images" />
              <h2 className="text-lg font-bold p-4 ">{course.title}</h2>
              <div className="flex flex-col justify-between items-center p-2">
                <div className="flex gap-24 items-center mb-2">
                  <p className="text-sm">{course.subtitle}</p>
                  <p>{course.icon1}</p>
                </div>
                <div className="flex gap-24 items-center">
                <p>{course.icon2}</p>
                <button className="bg-white-500 hover:bg-blue-700 hover:border-0 hover:text-white text-black border-[1px] border-gray-800 font-bold py-1 px-4 rounded">
                  {course.button}
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseTabs;

// ftGv@4778#
