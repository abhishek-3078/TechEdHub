import React from "react";
import CourseCard from "./CourseCard";

const ContainCourseCard = (props) => {
    return (
        <div className=" flex overflow-auto whitespace-nowrap w-[100%] p-2 ">
            {
                props.course.map((e,i) => {
                    console.log(e);
                    return (
                        <CourseCard key={i} CourseName={e.CourseName} CourseRating={e.CourseRating} Views={e.Views} Level={e.Level} Image={e.Image} />
                    )
                })
            }

        </div>
    )
}

export default ContainCourseCard;