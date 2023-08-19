import React, { useState, useEffect, useRef } from "react";
// import { API } from "../assets/constant";
import LoginDiv from "./LoginDiv";

import { useCounter } from "./contextProvider";

import { Link } from "react-router-dom";

const Home = () => {
  const {loginDivDisplay,setloginDivDisplay}=useCounter()
  const [inputValue, setInputValue] = useState("");
  const [searchPlaceholder, setSearchPlaceholder] = useState("");
  const func = (i, j) => {
    if (j == i.length - 1) {
      i = (i + 1) % i.length;
    }
  };



  const logout = async()=>{
   
    const res=await fetch(`${API}/logout`)
    const data=await res.json()
    if(data.success){
      localStorage.removeItem('token')
      window.location.href="/login"
    }
    // ,{
    //   method: 'GET',
    //   credentials: 'include'
    // })
    // const data=await res.json()
    // console.log(data)
    // window.location.assign(`${API}/logout`)
  }
  const handleClick=()=>{
    window.open(`/course/${inputValue}`,'_self')
  }

  const placeholders = [
    "javascript",
    "python",
    "nodejs",
    "Data Structures and Algorithm",
  ];
  const typingSpeed = 100; // Adjust this value to control typing speed

  const currentPlaceholderIndexRef = useRef(0);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const placeholder = placeholders[currentPlaceholderIndexRef.current];

    const typingInterval = setInterval(() => {
      if (currentIndexRef.current < placeholder.length) {
        setSearchPlaceholder(
          (prevTyped) => prevTyped + placeholder[currentIndexRef.current]
        );
        setTimeout(() => {
          currentIndexRef.current += 1;
        });
      } else {
        clearInterval(typingInterval);

        setTimeout(() => {
          setSearchPlaceholder("");
          currentIndexRef.current = 0;
          currentPlaceholderIndexRef.current =
            (currentPlaceholderIndexRef.current + 1) % placeholders.length;
        }, 1000); // Delay before clearing and changing placeholder
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [placeholders]);
  useEffect(()=>{
    const url='http://localhost:3000'
    fetch(url).then().then(res=>res.toString()).then(res=>console.log(res.body))
  },[])
  return (
    <div>
      <main className=" bg-primary1 relative  ">
        <div className="p-4 flex flex-col justify-evenly relative overflow-hidden bg-none">
        {loginDivDisplay ? <LoginDiv/>:<></>}
          <div className=" absolute h-full w-[2400px] top-0   left-0 ">
            <video autoPlay muted loop className=" w-border-2  ">
              <source src="/videos/video_bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="z-10">
            <h1 className="text-white text-6xl mb-4  text-center font-heading">
              TechEdHub
            </h1>
            <div className="w-full flex flex-col gap-3 items-center justify-center">
              <h3 className="text-white">What do you want to Learn?</h3>

              <div className="flex w-[500px]">
                <input
                  type="text"
                  value={inputValue} onChange={(e)=>setInputValue(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="bg-white/20 p-3 rounded-l-[0.375rem] text-2xl text-white border-b-2 border-primary1 w-[400px]  pl-4"
                />
                <div className="bg-primary1 text-2xl cursor-pointer text-white p-3 rounded-r-[0.375rem]" onClick={handleClick}>
                  Search
                </div>
              </div>
            </div>
            <div className=" md:p-14 font-sans text-3xl text-white text-center leading-[50px]">
              Find all and the best roadmaps, methods and guidance for learning
              just about anything in Technology!
            </div>
            <div className="flex justify-center">



              <Link to="/home" className="no-underline">
              <div className="px-10 py-[18px] text-white text-3xl cursor-pointer bg-green-500/80 active:bg-green-700 rounded-full  " >
                Get Started
              </div>
              </Link>

            </div>
          </div>
        </div>
      </main>

      <section className="py-4">
        <div className="flex flex-col lg:px-20 xl:px-40">
          <div className="flex ">
            <div className="w-[48%] flex-shrink-0">
              <img
                src="https://www.quine.sh/images/landing-page/contrib-issue.png"
                className="w-[500px]"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-[50%] h-10 w-10 bg-white"></div>
              <div className="h-full w-[1px] bg-white"></div>
            </div>
            <div className="text-white p-4 w-[48%]">
              <h3>Courses Ranking</h3>
              <p className=" text-xl">
              Users can access authentic reviews and ratings from fellow learners who have completed the courses. This feature helps individuals make informed decisions about the quality and relevance of each course.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:px-20 xl:px-40">
          <div className="flex ">
          <div className="text-white p-4 w-[48%]">
              <h3>Community and Discussion Forums</h3>
              <p className=" text-xl">
                TechEdHub will foster a vibrant learning community where users can interact, collaborate, and seek help from peers and instructors. Discussion forums will facilitate knowledge-sharing and networking among learners.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-[50%] h-10 w-10 bg-white"></div>
              <div className="h-full w-[1px] bg-white"></div>
            </div>
            <div className="w-[48%] flex-shrink-0">
              <img
                src="https://www.quine.sh/images/landing-page/contrib-issue.png"
                className="w-[500px]"
                alt=""
              />
            </div>
           
          
          </div>
        
        </div>
        <div className="flex flex-col lg:px-20 xl:px-40">
          <div className="flex ">
            <div className="w-[48%] flex-shrink-0">
              <img
                src="https://www.quine.sh/images/landing-page/contrib-issue.png"
                className="w-[500px]"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-[50%] h-10 w-10 bg-white"></div>
              <div className="h-full w-[1px] bg-white"></div>
            </div>
            <div className="text-white p-4 w-[48%]">
              <h3>Industry Insights</h3>
              <p className=" text-xl">
              The platform will feature blogs, articles, and interviews with industry experts, providing users with insights into emerging trends, best practices, and real-world applications of technology.
              </p>
            </div>
          </div>
        
        </div>
    
      </section>
    </div>
  );
};

export default Home;
