import React from "react";

import { BsLink45Deg } from "react-icons/bs";
const DocumentBox = (props) => {
    return (
        <a href={props.link} className="mx-2 no-underline">

            <div className="border-2 border-white border-solid  w-max rounded-md h-9 hover:scale-105 ease-in-out duration-150 hover:cursor-pointer hover:bg-slate-100/10">
                <div className="flex pr-2 pl-2 mt-1">
                    <BsLink45Deg color="white" size={25} />
                    <p className="text-white text-md ">{props.title}</p>
                </div>
            </div>
        </a>
    );
}

export default DocumentBox;