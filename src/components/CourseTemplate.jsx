import React, { useState } from "react";
import RoadMap from "./RoadMap";
import Navbar from "./Navbar";
import { BiUpvote, BiSolidUpvote, BiDownvote, BiSolidDownvote } from "react-icons/bi";

const CourseTemplate = () => {

    const [voteState, setvoteState] = useState(null);

    const handleUpvote = () =>{
        if(voteState == true){
            setvoteState(false)
        }
        else{
            setvoteState(true);
        }
    }
    return (

        <>
            <Navbar />
            <div className="flex h-screen">
                <div className="w-[70%]">

                    <p className="bg-pink-400 text-2xl text-white ml-8 mr-8 pt-2 px-5 flex justify-between ">
                        <p>Default RoadMap</p>
                        <div className="flex">

                            <p>Upvote : </p>

                            <div onClick={handleUpvote}>

                                {voteState ?
                                    <BiUpvote size={30}/> :
                                    <BiSolidUpvote size={30} color="lightgreen"/>}
                            </div>

                            <div onClick={handleUpvote}>
                                {voteState ?
                                    <BiSolidDownvote size={30} color="red"/> :
                                    <BiDownvote size={30}/>}
                            </div>
                        </div>
                    </p>
                    <div className=" bg-red-800 overflow-scroll h-[60%] ml-8 mr-8">
                        <RoadMap />
                        
                    </div>
                    <div className=" bg-gray-700 ml-8 mr-8 rounded-lg p-1 mt-3">
                        <p className="text-white text-2xl">Community Discussion</p>
                    </div>
                </div>
                <div className="w-[30%] bg-green-500">

                </div>
            </div>
        </>
    )
}

export default CourseTemplate;