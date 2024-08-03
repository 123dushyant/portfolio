import React from 'react';

const Home = () => {
    return (
        <section className="home relative flex flex-col justify-center items-center bg-customGray text-white font-ubuntu h-screen w-full overflow-hidden">
            <div className="max-width flex flex-col justify-center items-center w-full h-full pointer-events-none">
                <div id="dot" className="absolute h-[300px] w-[300px] bg-gradient-to-r from-aquamarine to-mediumpurple filter blur-[200px] rounded-[60%]"></div>
                <div className="home-content text-center pointer-events-auto">
                    <div className="text-1 font-semibold lg:pr-36  text-6xl md:text-5xl sm:text-4xl lg:text-7xl xl:text-8xl mt-20 md:mt-16 sm:mt-12 lg:mt-16 xl:mt-20">MULTI-</div>
                    <div className="text-2 p-0 text-6xl lg:pr-10 md:text-5xl sm:text-4xl lg:text-7xl xl:text-8xl font-bold mt-[-20px] md:mt-[-16px] sm:mt-[-12px] lg:mt-[-16px] xl:mt-[-20px]">REFORMATORY</div>
                    <div className="container flex flex-col lg:flex-row w-full">
                        <div className="left-side flex-1 p-7 text-6xl md:text-5xl sm:text-4xl lg:text-7xl xl:text-8xl font-bold pl-10 md:pl-8 sm:pl-6 lg:pl-80 xl:pl-80 mt-[-46px] md:mt-[-40px] sm:mt-[-32px] lg:mt-[-40px] xl:mt-[-46px]">DESIGNER</div>
                        <div className="right-side flex-1 p-2 text-sm md:text-base sm:text-xs lg:text-sm xl:text-sm mt-[-3px] md:mt-[-2px] sm:mt-[1px] lg:mt-[-2px] xl:mt-[-3px]">
                            CREATIVE THINKING AND PROBLEM <br />
                            SOLVING ARE WHERE MY MIND WANDERS,<br />
                            USING MY KNOWLEDGE AND PASSION FOR <br />
                            DESIGN AS MY MEDIUM.
                        </div>
                    </div>
                    <div className="button relative mt-10 md:mt-8 sm:mt-6 lg:mt-8 xl:mt-40">
                        <a href="#contact" className="inline-block p-5 border-2 border-solid  border-transparent rounded-full bg-transparent text-yellow-500 w-20 h-20 md:w-16 md:h-16 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-center transition-all duration-300 ease-in-out hover:scale-110">
                            <span className="arrow block text-3xl md:text-2xl sm:text-xl lg:text-2xl xl:text-3xl text-white leading-5 md:leading-4 sm:leading-3 lg:leading-4 xl:leading-5">↓</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;