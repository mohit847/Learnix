import React, { useState } from "react";
// import "./styles.css";

const courses = [
  {
    id: 1,
    category: "design",
    title: "Design Fundamentals",
    description:
      "Learn the basics of design theory and apply them to create beautiful designs.",
    buttonText: "Enroll",
  },
  {
    id: 2,
    category: "design",
    title: "Typography for Designers",
    description:
      "Explore the principles of typography and how to apply them to your design work.",
    buttonText: "Enroll",
  },
  {
    id: 3,
    category: "design",
    title: "Web Design Basics",
    description:
      "Discover the fundamentals of web design and how to create responsive layouts.",
    buttonText: "Enroll",
  },
  {
    id: 4,
    category: "design",
    title: "User Experience Design",
    description:
      "Learn how to create user-centered designs that meet the needs of your users.",
    buttonText: "Enroll",
  },
  {
    id: 5,
    category: "development",
    title: "JavaScript Fundamentals",
    description:
      "Master the basics of JavaScript and start building dynamic web applications.",
    buttonText: "Enroll",
  },
  {
    id: 6,
    category: "development",
    title: "React for Beginners",
    description:
      "Get started with React and learn how to build reusable UI components.",
    buttonText: "Enroll",
  },
  {
    id: 7,
    category: "development",
    title: "Node.js Essentials",
    description:
      "Learn how to use Node.js to build scalable and efficient web applications.",
    buttonText: "Enroll",
  },
  {
    id: 8,
    category: "development",
    title: "Full-Stack Web Development",
    description:
      "Master the full-stack development process and build web applications from scratch.",
    buttonText: "Enroll",
  },
  {
    id: 9,
    category: "marketing",
    title: "Social Media Marketing",
    description:
      "Discover the latest social media marketing trends and tactics to grow your audience.",
    buttonText: "Enroll",
  },
  {
    id: 10,
    category: "marketing",
    title: "Content Marketing Strategy",
    description:
      "Create a winning content marketing strategy and attract more leads and customers.",
    buttonText: "Enroll",
  },
  {
    id: 11,
    category: "marketing",
    title: "Email Marketing Essentials",
    description:
      "Learn how to create effective email marketing campaigns that drive conversions.",
    buttonText: "Enroll",
  },
  {
    id: 12,
    category: "marketing",
    title: "Digital Advertising",
    description:
      "Master the art of digital advertising and drive more traffic to your website.",
    buttonText: "Enroll",
  },
];

const Tabs = ({ activeTab, onTabClick }) => {
  return (
    <div className="tabs">
      <div
        className={`tab ${activeTab === "design" ? "active" : ""}`}
        onClick={() => onTabClick("design")}
      >
        Design
      </div>
      <div
        className={`tab ${activeTab === "development" ? "active" : ""}`}
        onClick={() => onTabClick("development")}
      >
        Development
      </div>
      <div
        className={`tab ${activeTab === "marketing" ? "active" : ""}`}
        onClick={() => onTabClick("marketing")}
      >
        Marketing
      </div>
    </div>
  );
};
const CourseCard = ({ course }) => {
  const [enrolled, setEnrolled] = useState(false);

  const handleEnrollClick = () => {
    setEnrolled(true);
  };

  return (
    <div className="course-card">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <button onClick={handleEnrollClick} disabled={enrolled}>
        {enrolled ? "Enrolled" : course.buttonText}
      </button>
    </div>
  );
};

export default function CourseCategory() {
  const [activeTab, setActiveTab] = useState("design");

  const filteredCourses = courses.filter(
    (course) => course.category === activeTab
  );

  return (
    <div className="App">
      <h1>Online Courses</h1>
      <Tabs activeTab={activeTab} onTabClick={setActiveTab} />
      <div className="course-list">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

// export default CourseCategory;
