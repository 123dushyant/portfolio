import React from "react";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";

const Work = () => {
    return (
        <div className="font-sans">
            <div className="header font-extrabold text-white text-4xl lg:text-6xl xl:text-7xl w-full h-screen bg-customGray top-0 sticky text-center flex items-center justify-center">
                <h1 id="scale1" className="scale-y">WORK</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-4 p-4 lg:p-8">
                <div className="card flex flex-col items-center bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <img src={work1} alt="card-img1" className="card-img w-full h-auto object-cover" />
                    <div className="card-content text-white p-4 flex items-center justify-center text-base lg:text-lg">
                        <div className="visit border-2 w-28 items-center flex justify-center border-solid border-white rounded-full">
                            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="block w-full h-full flex items-center justify-center">
                                <button className="w-full h-full">Visit-</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card flex flex-col items-center bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <img src={work2} alt="card-img2" className="card-img w-full h-auto object-cover" />
                    <div className="card-content text-white p-4 flex items-center justify-center text-base lg:text-lg">
                        <div className="visit border-2 w-28 items-center flex justify-center border-solid border-white rounded-full">
                            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="block w-full h-full flex items-center justify-center">
                                <button className="w-full h-full">Visit-</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card flex flex-col items-center bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <img 
                        src="https://images.unsplash.com/photo-1722104784480-52b6fc3e3a34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D"
                        alt="Unsplash Image"
                        className="card-img w-full h-auto object-cover"
                    />
                    <div className="card-content text-white p-4 flex items-center justify-center text-base lg:text-lg">
                        {/* Additional content can be added here */}
                    </div>
                </div>
                <div className="card flex flex-col items-center bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <img 
                        src="https://images.unsplash.com/photo-1719937051124-91c677bc58fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D"
                        alt="Unsplash Image"
                        className="card-img w-full h-auto object-cover"
                    />
                    <div className="card-content text-white p-4 flex items-center justify-center text-base lg:text-lg">
                        {/* Additional content can be added here */}
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