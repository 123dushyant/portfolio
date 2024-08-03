import React from "react";
import { Link } from "react-router-dom";

const Expertise = () => {
    return (
        <div className="expertise min-h-screen w-full bg-white flex flex-col md:flex-row overflow-hidden px-4 md:px-8">
            <div className="relative md:pr-10 mt-12 md:mt-48 lg:mt-[130px] md:ml-4 lg:ml-20 w-full md:w-1/2">
                <div className="text-[#E49B0F] mb-3 text-xl font-semibold">Expertise</div>
                <div className="text-black text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 md:mb-10">
                    My key area of expertise.
                </div>
                <div className="text-black text-base md:text-lg lg:text-xl mb-6 md:mb-10">
                    Proficient in full-stack web development, specializing in HTML, CSS, JavaScript, React, Angular, Node.js, and SQL. Dedicated to creating responsive, user-centric websites with optimized performance and exceptional UX/UI design.
                </div>
                <div className="flex justify-start">
                    <Link to="#services" className="text-base md:text-lg px-4 md:px-6 py-2 md:py-3 border border-black rounded-lg transition-colors duration-300 hover:bg-black hover:text-white">
                        View All Services
                    </Link>
                </div>
            </div>
            <div className="relative lg:w-[670px] md:w-1/2 px-4 mt-8 md:mt-0 lg:mt-[140px]">
                <div className="bg-[#36454F] rounded-xl mb-6 p-4 md:p-5 text-white relative">
                    <div className="text-lg md:text-xl mb-2 font-semibold">Informational websites</div>
                    <div className="text-sm md:text-base mb-5">
                        Business website, Portfolios or engaging blogs, We design <br /> user-friendly platforms that captivate and inform your audience.
                    </div>
                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
                        <Link to="#informational-websites" className="bg-white text-black p-3 md:p-4 rounded-full transition-colors duration-300 hover:bg-gray-300">
                            ↓
                        </Link>
                    </div>
                </div>
                <div className="bg-[#36454F] rounded-xl mb-6 p-4 md:p-5 text-white relative">
                    <div className="text-lg md:text-xl mb-2 font-semibold">Corporate websites</div>
                    <div className="text-sm md:text-base mb-5">
                        Establish credibility and professionalism with a corporate website <br /> tailored to your brand's identity.
                    </div>
                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
                        <Link to="#corporate-websites" className="bg-white text-black p-3 md:p-4 rounded-full transition-colors duration-300 hover:bg-gray-300">
                            ↓
                        </Link>
                    </div>
                </div>
                <div className="bg-[#36454F] rounded-xl mb-6 p-4 md:p-5 text-white relative">
                    <div className="text-lg md:text-xl mb-2 font-semibold">E-commerce</div>
                    <div className="text-sm md:text-base mb-5">
                        Whether you are a budding startup or an established enterprise,<br /> we design intuitive e-commerce platforms.
                    </div>
                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
                        <Link to="#ecommerce-websites" className="bg-white text-black p-3 md:p-4 rounded-full transition-colors duration-300 hover:bg-gray-300">
                            ↓
                        </Link>
                    </div>
                </div>
                <div className="bg-[#36454F] rounded-xl p-4 md:p-5 text-white relative">
                    <div className="text-lg md:text-xl mb-2 font-semibold">Web Applications</div>
                    <div className="text-sm md:text-base mb-5">
                        From custom CRM systems to interactive dashboards, we develop <br /> tailored solutions that optimize efficiency and productivity.
                    </div>
                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
                        <Link to="#web-applications" className="bg-white text-black p-3 md:p-4 rounded-full transition-colors duration-300 hover:bg-gray-300">
                            ↓
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;