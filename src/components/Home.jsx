import React, { useState, useEffect, useRef } from "react";
import "./Home_CSS.css";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchPlaceholder, setSearchPlaceholder] = useState("");
  const func = (i, j) => {
    if (j == i.length - 1) {
      i = (i + 1) % i.length;
    }
  };
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

  return (
    <div>
      <main className=" bg-primary1 relative  ">
        <div className="p-4 flex flex-col justify-evenly relative overflow-hidden bg-none">
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
                  value={inputValue}
                  placeholder={searchPlaceholder}
                  className="bg-white/20 p-3 rounded-l-[0.375rem]  border-b-2 border-primary1 w-[400px] placeholder:text-2xl pl-4"
                />
                <div className="bg-primary1 text-2xl text-white p-3 rounded-r-[0.375rem]">
                  Search
                </div>
              </div>
            </div>
            <div className=" md:p-14 font-sans text-3xl text-white text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              molestias nulla! Dolores iusto nesciunt officia itaque a fuga
              voluptatem deserunt molestias consequatur voluptate ad blanditiis
              ea veritatis, quisquam omnis iure.
            </div>
            <div className="flex justify-center">
              <button className="px-10 py-[18px] text-white text-3xl bg-green-500/80 active:bg-green-700 rounded-full ">
                Get Started
              </button>
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
              <h3>lorem ipsum</h3>
              <p className=" text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                ipsum quidem nesciunt ab unde possimus suscipit, veritatis
                libero doloribus exercitationem repellendus facilis esse sit
                ratione modi necessitatibus sunt, labore laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:px-20 xl:px-40">
          <div className="flex ">
          <div className="text-white p-4 w-[48%]">
              <h3>lorem ipsum</h3>
              <p className=" text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                ipsum quidem nesciunt ab unde possimus suscipit, veritatis
                libero doloribus exercitationem repellendus facilis esse sit
                ratione modi necessitatibus sunt, labore laborum.
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
              <h3>lorem ipsum</h3>
              <p className=" text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                ipsum quidem nesciunt ab unde possimus suscipit, veritatis
                libero doloribus exercitationem repellendus facilis esse sit
                ratione modi necessitatibus sunt, labore laborum.
              </p>
            </div>
          </div>
        
        </div>
    
      </section>
    </div>
  );
};

export default Home;
