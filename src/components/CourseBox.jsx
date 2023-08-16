import React from 'react'
import './CourseBox.css'



let courses = [
    {
        'title':'Web Development Full Course',
        'channelName': 'CodeWithHarry',
        'likes': 3000,
        'image': "https://i.ytimg.com/an_webp/f3XVhwFKnik/mqdefault_6s.webp?du=3000&sqp=CJug8qYG&rs=AOn4CLD5r0tQpU2umRMSIBsrhKMI67wgzQ"
    },
    {
        'title':'Web Development Full Course',
        'channelName': 'CodeWithHarry',
        'likes': 3000,
        'image': "https://i.ytimg.com/an_webp/f3XVhwFKnik/mqdefault_6s.webp?du=3000&sqp=CJug8qYG&rs=AOn4CLD5r0tQpU2umRMSIBsrhKMI67wgzQ"
    },
    {
        'title':'Web Development Full Course',
        'channelName': 'CodeWithHarry',
        'likes': 3000,
        'image': "https://i.ytimg.com/an_webp/f3XVhwFKnik/mqdefault_6s.webp?du=3000&sqp=CJug8qYG&rs=AOn4CLD5r0tQpU2umRMSIBsrhKMI67wgzQ"
    },
    {
        'title':'Web Development Full Course',
        'channelName': 'CodeWithHarry',
        'likes': 3000,
        'image': "https://i.ytimg.com/an_webp/f3XVhwFKnik/mqdefault_6s.webp?du=3000&sqp=CJug8qYG&rs=AOn4CLD5r0tQpU2umRMSIBsrhKMI67wgzQ"
    },
    {
        'title':'Web Development Full Course',
        'channelName': 'CodeWithHarry',
        'likes': 3000,
        'image': "https://i.ytimg.com/an_webp/f3XVhwFKnik/mqdefault_6s.webp?du=3000&sqp=CJug8qYG&rs=AOn4CLD5r0tQpU2umRMSIBsrhKMI67wgzQ"
    },
    {
        'title':'Web Development Full Course',
        'channelName': 'CodeWithHarry',
        'likes': 3000,
        'image': "https://i.ytimg.com/an_webp/f3XVhwFKnik/mqdefault_6s.webp?du=3000&sqp=CJug8qYG&rs=AOn4CLD5r0tQpU2umRMSIBsrhKMI67wgzQ"
    },
]



const CourseItem = ({key, selectedIndex, title, channelName, likes, image}) => {


   let selectedCSS  = "";

    if(key==selectedIndex)
    {
        selectedCSS = " selectedCourseCSS";
    }

    return (<div className={"CourseItem" + selectedCSS}>


        <div className="CourseItemImage">
            <img src={image} />
        </div>


        <div className="CourseItemInfo">
            <div className= {"CourseTitle coursedata"}>{title}</div>
            <div className="CourseMakerName coursedata">{channelName}</div>
            <div className="CourseStats coursedata">Likes: {likes}</div>
        </div>
    </div>)
}

const CourseBox = () => {

  return (<div className="OuterCoursePanelBox">
        <div className="CoursePanelContainer">
                <div>
                    <h1>Courses</h1>
                </div>
        <div class="searchBox">
            <form onsubmit="event.preventDefault();" role="search">
                <div class="searchContainer">
                    <input id="search" type="search" placeholder="Search..." autofocus required />
                </div>
                <div class="BtnContainer">
                    <button type="submit">Go</button>    
                </div>
            </form>
        </div>
                <div className="CoursePanel scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-gray-500">


                    {courses.map((course, index)=>
                    {
                        return <CourseItem key={index} selectedIndex={0} title={course.title} channelName={course.channelName} likes={course.likes} image={course.image} />
                    })}
                </div>
        </div>
    </div>)
  
}

export default CourseBox