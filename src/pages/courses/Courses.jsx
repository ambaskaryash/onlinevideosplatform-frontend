import React from "react";
import CourseCard from "../../components/coursecard/CourseCard";
import { CourseData } from "../../context/CourseContext";
import "./courses.css";

const Courses = () => {
  const { courses } = CourseData();

  return (
    <div className="courses-page"> {/* Added a wrapper div */}
      <div className="courses-content"> {/* Content area for better structure */}
        <h2>Available Courses</h2>

        <div className="course-grid"> {/* Changed to grid for better responsiveness */}
          {courses && courses.length > 0 ? (
            courses.map((e) => <CourseCard key={e._id} course={e} />)
          ) : (
            <p className="no-courses">No Courses Yet!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;