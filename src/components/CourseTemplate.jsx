import React, { useState } from "react";
import RoadMap from "./RoadMap";
import Navbar from "./navbar";
import CourseBox from "./courseBox";
import { BiUpvote, BiSolidUpvote, BiDownvote, BiSolidDownvote } from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";
import DocumentBox from "./DocumentBox";
import RequiredDocument from "./Requireddocument.json";
import CommentBox from "./CommentBox";

const CourseTemplate = () => {

    const [voteState, setvoteState] = useState(null);

    const handleUpvote = () => {
        if (voteState == true) {
            setvoteState(false)
        }
        else {
            setvoteState(true);
        }
    }
    return (

        <>
            <Navbar />
            <div className="flex h-screen mt-4 mr-4">
                <div className="w-[70%] ">

                    <p className="bg-slate-800 text-2xl text-white ml-8 mr-8 pt-2 px-5 flex justify-between ">
                        <p>CodeWithHarry</p>
                        <div className="flex">

                            <div onClick={handleUpvote}>

                                {voteState ?
                                    <BiUpvote size={30} /> :
                                    <BiSolidUpvote size={30} color="lightgreen" />}
                            </div>
                            <p>12.5k</p>
                            <div onClick={handleUpvote}>
                                {voteState ?
                                    <BiSolidDownvote size={30} color="red" /> :
                                    <BiDownvote size={30} />}
                            </div>
                        </div>
                    </p>
                    <div className=" bg-gradient-to-b from-gray-700 via-gray-900 to-black overflow-x-scroll scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-gray-500  h-[60%] ml-8 mr-8 rounded-md">
                        <RoadMap />

                    </div>
                    <div className=" bg-gray-700 ml-8 mr-8 rounded-lg p-1 mt-3">
                        <p className="text-white text-2xl">Required Documents </p>
                        <div>
                            {/* <RequiredDocument/> */}
                            <div className="flex">

                                {RequiredDocument.map((e) => {
                                    return (
                                        <DocumentBox title = {e.title} link = {e.link}/>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                    <div className=" bg-gray-700 ml-8 mr-8 rounded-lg p-1 mt-3 ">
                        <p className="text-white text-2xl">Community Discussion</p>
                        <div className="flex ">
                            <p className="text-white ">Enter the Discussion</p>
                            {/* <input type="text" className="w-[70%] right-0 h-7 ml-3"/> */}
                            <textarea name="comment" id="commentBox" cols="70" rows="1" className="ml-3 p-2"></textarea>
                            <button className="w-10 flex justify-center bg-pink-500 ml-5 h-8 rounded-md"><AiOutlineSend color="white" className="mt-2" /></button>
                        </div>
                        <CommentBox/>
                        <CommentBox/>
                        <CommentBox/>
                    </div>
                </div>
                <div className="w-[30%] ">
                    <CourseBox />
                </div>
            </div>
        </>
    )
}

export default CourseTemplate;