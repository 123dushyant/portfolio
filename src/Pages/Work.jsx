import React from "react";
import work1 from "../assets/work1.jpg"
import work2 from "../assets/work2.jpg"


const Work = () => {
    return (
      <div className="font-sans overflow-hidden">
        <div className="header font-extrabold text-white text-[100px] lg:text-[350px] w-full h-screen bg-customGray top-0 sticky text-center flex items-center justify-center">
            <h1 id="scale1" className="scale-y">WORK</h1>
            </div>
            <div>
                <div className="card">
                  <img src={work1} alt="card-img1" className="card-img" />
                  <div className="card-content text-white justify-center flex items-center text-[22px]">
                    <div className="visit border-2 w-28 items-center flex justify-center border-solid border-white rounded-full " >
                      <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="_block w-full h-full flex items-center justify-center">
                      <button className="w-full h-full">Visit-</button></a>
                    </div> 
                  </div>
                </div>
                <div className="card">
                <img src={work2} alt="card-img2" className="card-img" />
                <div className="card-content text-white justify-center flex items-center text-[22px]">
                    <div className="visit border-2 w-28 items-center flex justify-center border-solid border-white rounded-full " >
                      <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="_block w-full h-full flex items-center justify-center">
                      <button className="w-full h-full">Visit-</button></a>
                    </div> 
                  </div>
          </div>
          <div className="card">
          <img 
              src="https://images.unsplash.com/photo-1722104784480-52b6fc3e3a34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D 1000x1000" 
              alt=""
              className="card-img"
            />
            <div className="card-content">
              
            </div>
          </div>
          <div className="card">
          <img 
              src="https://images.unsplash.com/photo-1719937051124-91c677bc58fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D 1000x1000" 
              alt=""
              className="card-img"
            />
            <div className="card-content">
              
            </div>
          </div>
        </div>
        <div className="footer font-extrabold text-white text-[100px] lg:text-[135px] w-full h-screen bg-customGray top-0 sticky text-start flex items-start justify-center">
        <h1 id="scale2" className=" scale-y mt-12 ">LET'S COLLABORATE</h1>
        </div>
      </div>
    );
  };
  
  export default Work;