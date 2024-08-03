import React from 'react';

const About = () => {
    return (
        <div className="about overflow-hidden relative flex flex-col lg:flex-row bg-customGray text-white h-screen w-full py-20 lg:px-0">
            <div className="flex-1 lg:pr-30 relative bg-no-repeat bg-[url('https://themewagon.github.io/monica/images/geometric_shape.svg')] bg-[length:330px_430px] lg:bg-[length:330px_550px] sm:bg-[length:230px_450px]">
                <div className="text-5xl lg:text-[25px] md:text-[25px] sm:text-[34px] lg:mt-[50px] md:mt-[40px] sm:mt-[50px] lg:ml-[140px] md:mr-[80px] sm:ml-[214px] lg:mb-[48px] md:mb-[51px] sm:mb-[40px] lg:pt-18 lg:pl-16">About</div>
                <div className="lg:text-6xl sm:w-[460px]  sm:text-[47px] md:text-[47px] font-semibold mt-4 lg:mt-6 lg:pl-32 sm:pl-20 md:pl-20 " >
                    <h2>An inspiring headline about yourself.</h2>
                </div>
                <div className="mt-20 sm:ml-20 md:ml-20 lg:mt-32 pl-12 lg:pl-32">
                    <a href="#contact" className="text-white text-lg lg:text-xl border border-white px-8 py-2 rounded-full transition-colors duration-300 hover:bg-white hover:text-gray-800">
                        About Me
                    </a>
                </div>
            </div>
            <div className="flex-1 lg:pl-20 sm:pl-10 md:pl-10 sm:pr-2 pt-10 lg:pt-32">
                <div className="text-lg lg:text-3xl max-w-2xl">
                    I am proficient in technologies such as HTML, CSS, JavaScript, React, and Node.js, and I am constantly expanding my skill set to stay abreast of the latest industry trends. Collaboration and effective communication are at the core of my work ethic, allowing me to understand client needs and translate them into technical specifications and actionable plans.
                </div>
            </div>
        </div>
    );
};

export default About;