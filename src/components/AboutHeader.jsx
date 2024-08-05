import React from 'react';

const AboutHeader = () => {
    return (
        
        <div className="content relative bg-no-repeat  bg-[url('https://themewagon.github.io/monica/images/geometric_shape.svg')] bg-start lg:bg-[length:300px_540px] sm:bg-[length:230px_450px]  lg:items-start items-center lg:pl-20 pl-0">
            <div className="text-xl lg:text-xl text-yellow-500 flex items-start text-start font-mono mt-10 lg:mt-28 m-10 lg:ml-7 ">
                About
            </div>
            <div className="text-4xl lg:text-7xl sm:text-6xl mt-2 lg:mt-6 max-w-lg lg:max-w-1xl text-center lg:text-left mx-auto">
                
                <h2 className="font-dm-serif">An inspiring headline about yourself.</h2>
                </div>
            <div className="mt-10 ml-20 lg:mt-20 sm:mt-20">
                <a href="#contact" className="text-white text-lg lg:text-2xl border border-white px-20 py-2 rounded-full transition-colors duration-300 hover:bg-white hover:text-gray-800">
                    About Me
                </a>
            </div>
        </div>
    );
};

export default AboutHeader;