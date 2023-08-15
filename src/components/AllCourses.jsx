import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import ListCourses from "./ListCourses";

const AllCourses = () => {
    return (
        <div className="shadow-lg w-[70%] m-3  overflow-auto h-screen bg-blue-950 rounded-lg">
            <div className="flex justify-between bg-primary p-2 text-white">
                <div className="flex">
                    <p className="text-4xl ">Top Courses</p>
                    <MdDoubleArrow size={50} />
                </div>
                <div className="flex align-middle h-8 mt-2 ">
                    <input type="text" className="border-2 border-blue-950 border-solid " />
                    <button className="ml-1">Search</button>
                </div>
            </div>
            <ListCourses/>
            <ListCourses/>
            <ListCourses/>
        </div>
    );
}

export default AllCourses;