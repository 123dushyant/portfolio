import React from 'react';

const Home = () => {
    return (
        <section className="home relative flex flex-col justify-center items-center bg-customGray text-white font-ubuntu h-screen w-full overflow-hidden">
            <div className="max-width flex flex-col justify-center items-center w-full h-full pointer-events-none">
                <div id="dot" className="absolute h-[300px] w-[300px] bg-gradient-to-r from-aquamarine to-mediumpurple filter blur-[200px] rounded-[60%]"></div>
                <div className="home-content text-center pointer-events-auto">
                    <div className="text-1 font-semibold text-[100px] lg:text-[90px] md:text-[80px] sm:text-[69px] mt-[190px] lg:mt-[170px] md:mt-[170px] sm:mt-[140px] mr-[265px] lg:mr-[240px] md:mr-[120px] sm:mr-[104px] mb-[-73px] lg:mb-[-63px] md:mb-[-51px] sm:mb-[-43px]">MULTI-</div>
                    <div className="text-2 text-[100px] lg:text-[90px] md:text-[80px] sm:text-[69px] font-bold mt-[-20px] lg:mt-[-18px] md:mt-[-15px] sm:mt-[-13px] mb-[-35px] lg:mb-[-30px] md:mb-[-20px] sm:mb-[-18px]">REFORMATORY</div>
                    <div className="container flex flex-col lg:flex-row w-full">
                        <div className="left-side flex-1 p-2 text-[100px] lg:text-[90px] md:text-[80px] sm:text-[69px] font-bold pl-[186px] lg:pl-[177px] md:pl-[17px] sm:pl-[15px] mt-[-46px] lg:mt-[-40px] md:mt-[-38px] sm:mt-[-32px]">DESIGNER</div>
                        <div className="right-side flex-1 p-2 text-[13px] lg:text-[12px] md:text-[23px] sm:text-[17px] mt-[-3px] lg:mt-[-2px] md:mt-[1px] sm:mt-[2px]">
                            CREATIVE THINKING AND PROBLEM <br />
                            SOLVING ARE WHERE MY MIND WANDERS,<br />
                            USING MY KNOWLEDGE AND PASSION FOR <br />
                            DESIGN AS MY MEDIUM.
                        </div>
                    </div>
                    <div className="button relative mt-[90px] lg:mt-[80px] md:mt-[70px] sm:mt-[60px]">
            <a href="#contact" className="inline-block p-5 border-2 border-solid  border-transparent rounded-full bg-transparent text-yellow-500 w-[90px] h-[90px] lg:w-[80px] lg:h-[80px] md:w-[70px] md:h-[70px] sm:w-[60px] sm:h-[60px] text-center transition-all duration-300 ease-in-out hover:scale-110">
                <span className="arrow block text-[35px] lg:text-[30px] md:text-[25px] sm:text-[30px] text-white leading-[45px] lg:leading-[40px] md:leading-[35px] sm:leading-[30px]">↓</span>
            </a>
        </div>
                </div>
            </div>
        </section>
    );
};

export default Home;