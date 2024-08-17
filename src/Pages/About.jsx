import React from 'react';
import AboutHeader from '../components/AboutHeader';
import AboutContent from '../components/AboutContent';

const About = () => {
    return (
        <div className=" about overflow-hidden relative flex flex-col xl:flex-row bg-customGray text-white h-auto w-full md:h-auto lg:h-auto xl:h-screen brightness-900 ">
            <AboutHeader />
            <AboutContent />
        </div>
    );
};

export default About;