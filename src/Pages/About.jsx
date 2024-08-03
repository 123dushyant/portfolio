import React from 'react';

const About = () => {
    return (
        <div className="about relative flex flex-col lg:flex-row bg-customGray text-white overflow-hidden min-h-screen w-full py-10 lg:py-20 px-4 lg:px-0">
            <div className="flex-1 lg:pr-30 relative bg-no-repeat bg-[url('https://themewagon.github.io/monica/images/geometric_shape.svg')] bg-[length:330px_430px] lg:bg-[length:330px_550px]">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-6 sm:mt-10 lg:mt-20 px-4 sm:px-10 lg:px-20">
                    About
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 lg:mt-6 px-4 sm:px-10 lg:px-20">
                    <h2>An inspiring headline about yourself.</h2>
                </div>
                <div className="mt-6 lg:mt-10 px-4 sm:px-10 lg:px-20">
                    <a href="#contact" className="text-white text-base sm:text-lg lg:text-xl border border-white px-4 py-2 sm:px-8 sm:py-3 rounded-full transition-colors duration-300 hover:bg-white hover:text-gray-800">
                        About Me
                    </a>
                </div>
            </div>
            <div className="flex-1 lg:pl-20 pt-10 lg:pt-32 px-4 sm:px-10 lg:px-0">
                <div className="text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
                    I am proficient in technologies such as HTML, CSS, JavaScript, React, and Node.js, and I am constantly expanding my skill set to stay abreast of the latest industry trends. Collaboration and effective communication are at the core of my work ethic, allowing me to understand client needs and translate them into technical specifications and actionable plans.
                </div>
            </div>
        </div>
    );
};

export default About;