import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import ListCourses from "./ListCourses";

import {FaSistrix} from "react-icons/fa";

const AllCourses = () => {
    return (
        <div className="shadow-lg w-[70%] m-3   h-screen rounded-lg  ">
            <div className="flex justify-between p-3 text-white bg-amber-600">
                <div className="flex ">
                    <p className="text-4xl ">Top Courses</p>
                    <MdDoubleArrow size={50} />
                </div>
                <div className="flex align-middle h-8 mt-2 ">
                    <input type="text" className="rounded-sm text-black pl-1" />
                    <button className="w-min m-0 bg-transparent hover:bg-transparent ml-1 p-1 rounded-sm"><FaSistrix size={25}/></button>
                </div>
            </div>

            <div className="overflow-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-400 h-[100%]">
            <ListCourses/>
            <ListCourses/>
            <ListCourses/>
            </div>
            </div>
    );
}

export default AllCourses;