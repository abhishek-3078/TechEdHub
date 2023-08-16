import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import ListCourses from "./ListCourses";

const AllCourses = () => {
    return (
        <div className="shadow-lg w-[70%] m-3  overflow-auto h-screen rounded-lg bg-neutral-800">
            <div className="flex justify-between p-3 text-white bg-amber-600">
                <div className="flex ">
                    <p className="text-4xl ">Top Courses</p>
                    <MdDoubleArrow size={50} />
                </div>
                <div className="flex align-middle h-8 mt-2 ">
                    <input type="text" className="rounded-sm " />
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