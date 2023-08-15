import React from "react";
import ContainCourseCard from "./ContainCourseCard";

import courseInfo from './courseInfo.json'

const ListCourses = ()=>{
    return(
        <div className="m-4">
        <p className="text-2xl text-white">Basic Programming Languages </p>
        <ContainCourseCard course = {courseInfo}/>
        </div>
    )
}

export default ListCourses;