import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const SubjectCard = () => {

    return (

        <div className="card w-[250px] flex rounded-lg bg-gray-900 hover:scale-105 ease-in-out duration-300 mt-10 mr-5 shadow hover:shadow-lg ">
            <img src="https://blog.eduonix.com/wp-content/uploads/2018/09/Scientific-Python-Scipy.jpg" className="card-img-top w-[250px] h-[200px]" alt="..." />
            <div className="card-body">
                <h3 className="card-title font-bold text-xl text-white ">Start Learning Python</h3>
                <p className="text-sm text-gray-300">Learn Python Like a Pro. From The Basics All The Way to Creating your own Apps and Games!</p>
            </div>
        </div>
    )
}

export default SubjectCard;