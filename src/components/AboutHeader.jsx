import React from 'react';

const AboutHeader = () => {
    return (
        
        <div className="content relative bg-no-repeat  bg-[url('https://themewagon.github.io/monica/images/geometric_shape.svg')] bg-start  xl:bg-[length:280px_520px] lg:bg-[length:250px_390px] md:bg-[length:290px_310px] sm:bg-[length:230px_450px]  lg:items-start items-center lg:pl-20 pl-0">
            <div className="text-xl pl:0 lg:text-xl text-yellow-500 flex items-start text-start font-mono mt-10 lg:mt-24 xl:mt-32 xl:ml-1 m-10 lg:mb-2 md:mb-4 md:mt-20  xl:mb-2 lg:ml-0 sm:ml-12 ">
                About
            </div>
            <div className="text-4xl pl-6 text-slate-300 xl:text-6xl lg:text-7xl sm:text-6xl mt-2 lg-w-full xl:w-[400px] md:w-full md:pr-8 md:pl-10 lg:pl-0 sm:pl-10 xl:mr-40 xl:pl-0 text-left">
    <h2 className="font-dm-serif">An inspiring headline about yourself.</h2>
</div>
            <div className=" ml-20 xl:ml-10 hidden mt-10 xl:block xl:mt-28 sm:mt-20">
                <a href="#contact" className="text-white text-lg lg:text-2xl xl:text2xl border border-orange-400 px-20 py-2 rounded-full transition-colors duration-300 hover:bg-white hover:text-gray-800">
                    About Me
                </a>
            </div>
        </div>
    );
};

export default AboutHeader;