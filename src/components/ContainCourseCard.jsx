import React from "react";
import CourseCard from "./CourseCard";

const ContainCourseCard = (props) => {
    return (
        <div className=" flex overflow-x-auto scrollbar-thumb-slate-800 scrollbar-track-slate-500 scrollbar-thin whitespace-nowrap w-[100%] p-2">
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