import React from 'react';

const Home = () => {
    return (
        <section className="home relative flex flex-col justify-center items-center bg-customGray text-white font-ubuntu h-screen w-full overflow-hidden">
            <div className="relative flex flex-col justify-center items-center w-full h-full pointer-events-none">
                <div id="dot" className="absolute h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] bg-gradient-to-r from-aquamarine to-mediumpurple filter blur-[100px] lg:blur-[200px] rounded-[50%]"></div>
                <div className="home-content text-center pointer-events-auto z-10">
                    <div className="text-1 font-semibold text-[60px] lg:text-[80px] md:text-[70px] sm:text-[60px] mt-[100px] lg:mt-[150px] md:mt-[120px] sm:mt-[100px] mr-[100px] lg:mr-[150px] md:mr-[100px] sm:mr-[80px] mb-[-30px] lg:mb-[-50px] md:mb-[-40px] sm:mb-[-30px]">MULTI-</div>
                    <div className="text-2 text-[60px] lg:text-[80px] md:text-[70px] sm:text-[60px] font-bold mt-[-10px] lg:mt-[-20px] md:mt-[-15px] sm:mt-[-10px] mb-[-20px] lg:mb-[-30px] md:mb-[-20px] sm:mb-[-20px]">REFORMATORY</div>
                    <div className="container flex flex-col lg:flex-row w-full px-4">
                        <div className="left-side flex-1 text-[40px] lg:text-[60px] md:text-[50px] sm:text-[40px] font-bold pl-4 lg:pl-8 md:pl-6 sm:pl-4 mt-[-20px] lg:mt-[-30px] md:mt-[-20px] sm:mt-[-10px]">DESIGNER</div>
                        <div className="right-side flex-1 text-sm lg:text-base md:text-sm sm:text-xs mt-4 lg:mt-0">
                            CREATIVE THINKING AND PROBLEM <br />
                            SOLVING ARE WHERE MY MIND WANDERS,<br />
                            USING MY KNOWLEDGE AND PASSION FOR <br />
                            DESIGN AS MY MEDIUM.
                        </div>
                    </div>
                    <div className="button relative mt-8 lg:mt-12 md:mt-10 sm:mt-8">
                        <a href="#contact" className="inline-block p-4 lg:p-5 border-2 border-solid border-transparent rounded-full bg-transparent text-yellow-500 w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] md:w-[70px] md:h-[70px] sm:w-[60px] sm:h-[60px] text-center transition-all duration-300 ease-in-out hover:scale-105">
                            <span className="arrow block text-[20px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-white leading-[30px] lg:leading-[40px] md:leading-[35px] sm:leading-[30px]">↓</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;