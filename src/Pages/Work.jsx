import React from "react";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";

const Work = () => {
    return (
        <div className="font-sans brightness-90">
            <div className="header font-extrabold text-white text-4xl lg:text-6xl xl:text-7xl w-full h-screen bg-customGray top-0 sticky text-center flex items-center justify-center">
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
            <div className="footer font-extrabold text-white text-4xl lg:text-6xl xl:text-7xl w-full h-screen bg-customGray top-0 sticky text-center flex items-center justify-center">
                <h1 id="scale2" className="scale-y">LET'S COLLABORATE</h1>
            </div>
        </div>
    );
};

export default Work;