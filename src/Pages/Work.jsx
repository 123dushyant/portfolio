import React from "react";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";


const Work = () => {
    return (
        <div className="font-sans brightness-90">
            <div className="header font-extrabold text-slate-600 text-9xl lg:text-6xl xl:text-[22vw] w-full h-screen bg-customGray top-0 sticky text-center flex items-center justify-center">
                <h1 id="scale1" className="scale-y">WORK</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-4 p-4 lg:p-0">
                <div className="card flex flex-col items-center bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <img src={work1} alt="card-img1" className="card-img w-full h-auto object-cover" />
                    <div className="card-content text-white p-4 flex items-center justify-center text-base lg:text-lg">
                        <div className="visit border-2 w-28 items-center flex justify-center border-solid border-white rounded-full">
                            <a href="https://123dushyant.github.io/Ecommerce-website/" target="_blank" rel="noopener noreferrer" className=" w-full h-full flex items-center justify-center">
                                <button className="w-full h-full ">Visit-</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card flex flex-col items-center bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <img src={work2} alt="card-img2" className="card-img w-full h-auto object-cover" />
                    <div className="card-content text-white p-4 flex items-center justify-center text-base lg:text-lg">
                        <div className="visit border-2 w-28 items-center flex justify-center border-solid border-white rounded-full">
                            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className=" w-full h-full flex items-center justify-center">
                                <button className="w-full h-full">Visit-</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer  text-white text-4xl lg:text-6xl xl:text-7xl w-full h-screen bg-customGray top-0 sticky text-start grid items-top justify-top ">
                <h1 className=" text-5xl font-serif mt-24 mb-[-70px] ml-5">LET'S START</h1>
                <h1 className="text-5xl sm:text-6xl ml-40 font-serif mt-[-60px] text-center mr-[470px]">CREATE</h1>
                <span className="text-5xl font-serif mt-[-130px] ml-5">TOGETHER</span>
                <span className=" text-[44px] font-extrabold ml-4 sm:ml-40 sm:text-9xl">LET'S COLLABORATE </span>
            </div>
            
        </div>
    );
};

export default Work;