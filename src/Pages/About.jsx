import React from 'react';

const About = () => {
    return (
        <div className="about overflow-hidden relative flex flex-col lg:flex-row bg-customGray text-white h-screen w-full py-10 lg:py-20 lg:px-10">
            <div className="flex-1 relative bg-no-repeat bg-[url('https://themewagon.github.io/monica/images/geometric_shape.svg')]  bg-start lg:bg-[length:330px_550px] sm:bg-[length:230px_450px] flex flex-col justify-center lg:items-start items-center lg:pl-32 pl-1">
                <div className="text-3xl lg:text-5xl font-bold mt-10 lg:mt-20">
                    About
                </div>
                <div className="text-4xl lg:text-6xl sm:text-6xl font-semibold mt-9 lg:mt-6 max-w-md text-center lg:text-left">
                    <h2>An inspiring headline about yourself.</h2>
                </div>
                <div className="mt-10 lg:mt-12 sm:mt-20">
                    <a href="#contact" className="text-white text-lg lg:text-xl border border-white px-6 py-2 rounded-full transition-colors duration-300 hover:bg-white hover:text-gray-800">
                        About Me
                    </a>
                </div>
            </div>
            <div className="flex-1 lg:pl-20 pr-5 align pl-6 pt-10 lg:pt-32 sm:pt-20">
                <div className="text-lg lg:text-xl max-w-lg ">
                    I am proficient in technologies such as HTML, CSS, JavaScript, React, and Node.js, and I am constantly expanding my skill set to stay abreast of the latest industry trends. Collaboration and effective communication are at the core of my work ethic, allowing me to understand client needs and translate them into technical specifications and actionable plans.
                </div>
            </div>
        </div>
    );
};

export default About;