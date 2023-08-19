import React, { useEffect, useState } from "react";
import RoadMap from "./RoadMap";
import Navbar from "./navbar";
import CourseBox from "./CourseBox";
import { BiUpvote, BiSolidUpvote, BiDownvote, BiSolidDownvote } from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";
import DocumentBox from "./DocumentBox";
import RequiredDocument from "./Requireddocument.json";
import CommentBox from "./CommentBox";
import { useParams } from "react-router";
import { API } from "../assets/constant";

const CourseTemplate = () => {
    const {slug}=useParams()
    const [voteState, setvoteState] = useState(null);
    const [comment,setComment]=useState(null)
    const [replies,setReplies]=useState([])
    const handleUpvote = () => {
        if (voteState == true) {
            setvoteState(false)
        }
        else {
            setvoteState(true);
        }
    }
    const handleSubmit=async()=>{
        try{
       const res=await fetch(`${API}/reply`,{
        method:"POST",
        headers:{
            "Authorization":localStorage.getItem('token'),
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            message:comment,
            post:slug
        })
       })
       
       const data=await res.json()
       setComment('')
       getReply()
       console.log(data)

    }catch(e){
        console.log(e)
    }
    }
    const getReply=()=>{
        fetch(`${API}/getComments?post=${slug}`)
        .then(res=>res.json())
        .then(data=>{
            console.log("data:",data.data)
            setReplies(data.data)
        })
    }
    useEffect(()=>{
        getReply()
        
    },[])
    return (

        <>
          
            <div className="flex  mt-4 mr-4">
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
                    <div className=" bg-gradient-to-b from-gray-700 via-gray-900 to-black overflow-x-scroll scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-gray-500  h-[600px] ml-8 mr-8 rounded-md">
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
                            <textarea name="comment" id="commentBox" cols="70" rows="1" className="ml-3 p-2" 
                            value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
                            <button className="w-10 flex justify-center bg-pink-500 ml-5 h-8 rounded-md" onClick={handleSubmit}><AiOutlineSend color="white" className="mt-2" /></button>
                        </div>
                        <div className="max-h-[500px] min-h-[100px] overflow-scroll">
                            
                            {replies.length>0? replies.map((reply,i)=>{
                                
                                return <div key={i}><CommentBox author = {reply.author.username} text = {reply.text} upvotes = {reply.upvotes} /></div>
                            }):<></>
                        }
                        
                        {/* <CommentBox/>
                        <CommentBox/>
                        <CommentBox/> */}
                        </div>
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