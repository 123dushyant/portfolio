import React from 'react';

const About = () => {
    return (
        <div className="about relative flex flex-col lg:flex-row bg-customGray text-white overflow-hidden min-h-screen w-full py-20 px-6 lg:px-0">
            <div className="flex-1 lg:pr-30 relative bg-no-repeat bg-[url('https://themewagon.github.io/monica/images/geometric_shape.svg')] bg-[length:330px_430px] lg:bg-[length:330px_550px]">
                <div className="text-5xl md:text-4xl sm:text-3xl mt-10 lg:mt-[90px] md:mt-[70px] sm:mt-[50px] mb-6 lg:mb-[58px] md:mb-[30px] sm:mb-[20px]">
                    About
                </div>
                <div className="text-2xl lg:text-7xl font-semibold mt-4 lg:mt-6">
                    <h2>An inspiring headline about yourself.</h2>
                </div>
                <div className="mt-8 lg:mt-24">
                    <a href="#contact" className="text-white text-lg lg:text-xl border border-white px-8 py-2 rounded-full transition-colors duration-300 hover:bg-white hover:text-gray-800">
                        About Me
                    </a>
                </div>
            </div>
            <div className="flex-1 lg:pl-20 pt-10 lg:pt-32">
                <div className="text-base lg:text-3xl max-w-2xl">
                    I am proficient in technologies such as HTML, CSS, JavaScript, React, and Node.js, and I am constantly expanding my skill set to stay abreast of the latest industry trends. Collaboration and effective communication are at the core of my work ethic, allowing me to understand client needs and translate them into technical specifications and actionable plans.
                </div>
            </div>
        </div>
    );
};

export default About;