import React from "react";
import { BsReply } from "react-icons/bs";
import { BiUpvote, BiSolidUpvote, BiDownvote, BiSolidDownvote } from "react-icons/bi";
const CommentBox = (props) => {
    console.log("props:",props)
    return (
        <div className="border-y-2 hover:border-white border-solid my-1 border-transparent ease-in-out duration-300 pl-5 pt-3 mt-2">
            <div className="flex w-100">
                <img src="https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/10/27082154/dirtiest-man-clean-thumb-1-1568x882.jpg" alt="" className="h-10 w-10 rounded-[50px]" />
                <p className="text-white text-lg mt-2 ml-2">@{props.author}</p>
            </div>
            <div className="flex">
                <p className="text-white">{props.text}</p>
            </div>
            <div className="flex justify-between">

            <div className="flex w-[15%] justify-evenly">
                <div><BiUpvote color="white" size={20} /></div>
                <p className="text-white ">{props.upvotes}</p>
                <div><BiDownvote color="white" size={20} /></div>
            </div>
            <div className="flex mr-5">

            <BsReply color="white" size={24} className="mr-2" />
            <p className="text-white text-lg">Reply</p>
            </div>
            </div>
        </div>
    )
}

export default CommentBox;