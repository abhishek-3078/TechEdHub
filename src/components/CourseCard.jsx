import React from "react";
import { TfiStatsUp } from "react-icons/tfi";
import { AiFillStar } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { useState } from "react";
const CourseCard = (props) => {
    console.log(props);
    const [showInfo,setShowInfo] = useState(true);
    const [starColor,setStarColor] = useState('white');

    const rating = props.CourseRating;

    // console.log("These are props",props.CourseRating);

    // if(Number(props.CourseRating) > 3.5){
    //     setStarColor('yellow');
    // }
    // else if(Number(props.CourseRating) > 2){
    //     setStarColor('gray');
    // }

    console.log(rating);

    return (

        <div className="card min-w-[250px] w-[250px] flex rounded-lg bg-gradient-to-t from-gray-900 to-gray-600 hover:scale-105 ease-in-out duration-300 mt-2 mb-2 mr-5 shadow hover:shadow-lg shrink-0	" onMouseOver={()=>{setShowInfo(false)}} onMouseOut={()=>{setShowInfo(true)}}>
            <img src= {props.Image} className="card-img-top w-[250px] h-[200px]" alt="..." />

            <div className="card-body">
                <div className="flex justify-between">
                    <p className="text-white text-sm flex"><TfiStatsUp size={17} /><p className="ml-2">{props.Views}+</p></p>
                    <p className="text-white text-sm h-8 flex border-solid border-2 border-gray-600 p-1 rounded-md"><AiFillStar color={starColor} size={20} /><p>{props.CourseRating}</p></p>
                </div>
                <p className="text-lg text-white">{props.CourseName}</p>
                <div className="flex text-white mt-2">
                    <GiProgression size={14} />
                    <p className="text-xs ml-1">{props.Level}</p>
                </div>
            </div>

            {/* <div className={`absolute  text-white bg-black  ${showInfo?'hidden':'block'} rounded-md p-2 overflow-hidden h-[200px]` }>
                <h1 className="text-lg">Description</h1>
                <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime corrupti, ex ipsum facere dicta dolorem, hic accusantium quaerat, soluta sapiente veniam illo magnam! Cum delectus omnis labore. Itaque, reiciendis recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur et libero porro provident. Deleniti reiciendis commodi, ipsa aperiam</p></div> */
            }
        </div>
    )
}

export default CourseCard;