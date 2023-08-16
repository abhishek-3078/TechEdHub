import React from "react";
import AllCourses from './AllCourses';
import Newsbox from './Newsbox';
import Navbar from "./Navbar";

const StudentDashboard = () => {
    return (
        <>
        <Navbar/>
        <div className="flex justify-between p-3">
            <AllCourses />
            <Newsbox />
        </div>
        </>

    )
}

export default StudentDashboard;