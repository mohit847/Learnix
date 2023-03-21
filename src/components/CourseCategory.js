import React, { useState } from "react";

const tabs = [
  {
    title: "Design",
    subtitle:
      "Build skills with courses, certificates, and degrees online from world-class.",
    courses: [
      {
        title: "User Centered Design",
        subtitle: "(Beginner friendly)",
        icon1: "202 Lessons",
        icon2: "6k+ students",
        button: "Enroll",
      },
      {
        title: "Graphic Design",
        subtitle: "(Intermediate level)",
        icon1: "150 Lessons",
        icon2: "3k+ students",
        button: "Enroll",
      },
      {
        title: "Design Thinking",
        subtitle: "(Advanced level)",
        icon1: "100 Lessons",
        icon2: "2k+ students",
        button: "Enroll",
      },
      {
        title: "UI Design",
        subtitle: "(Expert level)",
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
        icon1: "150 Lessons",
        icon2: "5k+ students",
        button: "Enroll",
      },
      {
        title: "Mobile App Development",
        subtitle: "(Intermediate level)",
        icon1: "120 Lessons",
        icon2: "2k+ students",
        button: "Enroll",
      },
      {
        title: "Game Development",
        subtitle: "(Advanced level)",
        icon1: "90 Lessons",
        icon2: "1k+ students",
        button: "Enroll",
      },
      {
        title: "Full Stack Development",
        subtitle: "(Expert level)",
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
        icon1: "180 Lessons",
        icon2: "4k+ students",
        button: "Enroll",
      },
      {
        title: "Social Media Marketing",
        subtitle: "(Intermediate level)",
        icon1: "100 Lessons",
        icon2: "2k+ students",
        button: "Enroll",
      },
      {
        title: "Content Marketing",
        subtitle: "(Advanced level)",
        icon1: "75 Lessons",
        icon2: "1k+ students",
        button: "Enroll",
      },
      {
        title: "Influencer Marketing",
        subtitle: "(Expert level)",
        icon1: "50 Lessons",
        icon2: "500+ students",
        button: "Enroll",
      },
    ],
  },
];

// const CourseTabs = () => {
//   const [activeTab, setActiveTab] = useState(tabs[0]);

//   return (
//     <div className="flex flex-col items-center border-2 border-cyan-900">
//       <div className="text-6xl">Browse Our Courses by Category</div>
//       <div className="flex justify-center items-center self-center my-20 max-w-5xl mx-auto border-2 border-gray-800">
//         <div className="flex flex-col w-auto p-4 border-2 border-gray-800">
//           {tabs.map((tab) => (
//             <div
//               key={tab.title}
//               className={`p-4 cursor-pointer ${
//                 activeTab.title === tab.title ? "bg-gray-200" : ""
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               <h2 className="text-xl font-bold">{tab.title}</h2>
//               <p className="text-sm">{tab.subtitle}</p>
//             </div>
//           ))}
//         </div>
//         <div className="grid grid-cols-2 gap-4 p-4 w-auto border-2 border-blue-800">
//           {activeTab.courses.map((course) => (
//             <div key={course.title} className="border w-60">
//               <h2 className="text-lg font-bold p-2">{course.title}</h2>
//               <p className="text-sm p-2">{course.subtitle}</p>
//               <div className="flex justify-between items-center p-2">
//                 <div>
//                   <p>{course.icon1}</p>
//                   <p>{course.icon2}</p>
//                 </div>
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                   {course.button}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const CourseTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex flex-col items-center border-2 border-cyan-900">
      <h2 className="text-4xl max-w-xs text-center my-8 break-words">
        Browse Our Courses by Category
      </h2>
      <div className="flex justify-center items-center self-center my-14 max-w-6xl mx-auto border-2 border-red-700">
        <div className="flex flex-col  border-2 border-orange-500">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className={`px-4 py-5 cursor-pointer ${
                activeTab.title === tab.title ? "bg-gray-500 backdrop-blur-lg" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <h2 className="text-xl font-bold break-words">{tab.title}</h2>
              <p className="text-sm py-1 break-words w-72">{tab.subtitle}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 p-4 w-auto border-2 border-zinc-700 ">
          {activeTab.courses.map((course) => (
            <div
              key={course.title}
              className="border w-72 rounded-lg shadow-md"
            >
              <h2 className="text-lg font-bold p-2">{course.title}</h2>
              <p className="text-sm p-2">{course.subtitle}</p>
              <div className="flex justify-between items-center p-2">
                <div>
                  <p>{course.icon1}</p>
                  <p>{course.icon2}</p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {course.button}
                </button>
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