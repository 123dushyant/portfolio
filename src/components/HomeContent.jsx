import React from 'react';

const HomeContent = () => (
    <div className="home-content flex justify-center items-center h-screen bg-customGray text-slate-300 pointer-events-auto">
        <div className="text-center">
            <div className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl xl:mt-60 lg:mt-40 md:mt-40 sm:mt-20 mt-40 ">
                <h1 className='xl:mr-32 lg:mr-20 md:mr-24 sm:mr-24 mr-16 ' >MULTI-</h1>
                <h1 className="mt-[-10px] md:mt-[-16px] sm:mt-[-12px] lg:mt-[-16px] xl:mr-3 lg:mr-0 md:ml-6 sm:mr-4 ml-2 ">REFORMATORY</h1>
                <h1 className="mt-[-10px] md:mt-[-16px] sm:mt-[-12px] lg:mt-[-16px] xl:mt-[-20px] xl:mr-3 lg:mr-0 md:ml-7 sm:mr-4 ml-3 ">DESIGNER</h1>
            </div>
            <div className="mt-4 text-sm md:text-base lg:text-sm xl:text-sm">
                CREATIVE THINKING AND PROBLEM <br />
                SOLVING ARE WHERE MY MIND WANDERS,<br />
                USING MY KNOWLEDGE AND PASSION FOR <br />
                DESIGN AS MY MEDIUM.
            </div>
            <div className="mt-20 md:mt-8 sm:mt-6 lg:mt-8 xl:mt-20 ">
                <a href="#contact" className="inline-block p-5 border-2 border-solid border-e-8 border-l-8 hover:bg-red-300 transform-gpu rounded-full bg-transparent w-20 h-20 md:w-16 md:h-16 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-center transition-all duration-300 ease-in-out hover:scale-110">
                    <span className="arrow block text-3xl md:text-2xl sm:text-xl lg:text-2xl xl:text-3xl text-white leading-5 md:leading-4 sm:leading-3 lg:leading-4 xl:leading-8">↓</span>
                </a>
            </div>
        </div>
    </div>
);

export default HomeContent;