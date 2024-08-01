import React from "react";
import { Link } from "react-router-dom";

const Expertise = () => {
    return (
        <div className="expertise min-h-screen w-full bg-white flex flex-col md:flex-row overflow-hidden">
            <div className="relative md:pr-10 mt-48 lg:mt-[130px] md:ml-20 w-full md:w-1/2 px-5 md:px-0">
                <div className="text-[#E49B0F] mb-3 text-xl">Expertise</div>
                <div className="text-black text-6xl md:text-6xl lg:text-7xl font-semibold mb-10">
                    My key area of expertise.
                </div>
                <div className="text-black text-xl mb-10">
                    Proficient in full-stack web development, specializing in HTML, CSS, JavaScript, React, Angular, Node.js, and SQL. Dedicated to creating responsive, user-centric websites with optimized performance and exceptional UX/UI design.
                </div>
                <div className="flex justify-start">
                    <Link to="#services" className="text-lg text-black px-6 py-3 border border-black rounded-lg">
                        View All Services
                    </Link>
                </div>
            </div>
            <div className="relative lg:w-[670px] md:w-1/2 px-4 md:px-0 mt-10 lg:mt-[140px] md:mt-0 ">
                <div className="bg-[#36454F] rounded-xl mb-6 p-5 text-white relative">
                    <div className="text-lg mb-2 ">Informational websites</div>
                    <div className="text-md mb-5">
                        Business website, Portfolios or engaging blogs, We design <br /> user-friendly platforms that captivates and inform your audience.
                    </div>
                    <div className="absolute bottom-14 right-12">
                        <Link to="#informational-websites" className="bg-white text-black p-4 rounded-full">
                            ↓
                        </Link>
                    </div>
                </div>
                <div className="bg-[#36454F] rounded-xl mb-10 p-5 text-white relative">
                    <div className="text-lg mb-2">Corporate websites</div>
                    <div className="text-md mb-5">
                        Establish credibility and professionalism with a corporate website <br /> tailored to your brand's identity.
                    </div>
                    <div className="absolute bottom-14 right-12">
                        <Link to="#corporate-websites" className="bg-white text-black p-4 rounded-full">
                            ↓
                        </Link>
                    </div>
                </div>
                <div className="bg-[#36454F] rounded-xl mb-10 p-5 text-white relative">
                    <div className="text-lg mb-2">E-commerce</div>
                    <div className="text-md mb-5">
                        Whether you are a budding startup or an established enterprise,<br /> we design intuitive
                    </div>
                    <div className="absolute bottom-14 right-12">
                        <Link to="#ecommerce-websites" className="bg-white text-black p-4 rounded-full">
                            ↓
                        </Link>
                    </div>
                </div>
                <div className="bg-[#36454F] rounded-xl p-3 text-white relative">
                    <div className="text-lg mb-2">Web Applications</div>
                    <div className="text-md mb-5">
                        From custom CRM systems to interactive dashboards, we develop <br /> tailored solutions that optimize efficiency and productivity.
                    </div>
                    <div className="absolute bottom-14 right-12">
                        <Link to="#web-applications" className="bg-white text-black p-4 rounded-full">
                            ↓
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;