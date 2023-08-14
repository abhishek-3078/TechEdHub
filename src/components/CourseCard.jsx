import React from "react";
import { TfiStatsUp } from "react-icons/tfi";
import { AiFillStar } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
const CourseCard = () => {

    return (

        <div className="card w-[250px] flex rounded-lg bg-gray-900 hover:scale-105 ease-in-out duration-300 mt-10 mr-5 shadow hover:shadow-lg">
            <img src="https://blog.eduonix.com/wp-content/uploads/2018/09/Scientific-Python-Scipy.jpg" className="card-img-top w-[250px] h-[200px]" alt="..." />

            <div className="card-body">
                <div className="flex justify-between mb-2">
                    <p className="text-white text-sm flex"><TfiStatsUp size={17} /><p className="ml-2">2k+ Views</p></p>
                    <p className="text-white text-sm flex border-solid border-2 border-gray-600 p-1 rounded-md"><AiFillStar size={20} /><p className="ml-1 ">4.9</p></p>
                </div>
                <p className="text-lg text-white">Python Backend Development with Django</p>
                <div className="flex text-white mt-2">
                    <GiProgression size={14} />
                    <p className="text-xs ml-1">Intermdiate to Advanced</p>
                </div>
            </div>


        </div>
    )
}

export default CourseCard;