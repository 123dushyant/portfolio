import React from 'react';
import AboutHeader from '../components/AboutHeader';
import AboutContent from '../components/AboutContent';

const About = () => {
    return (
        <div className=" container m-auto select-none about overflow-hidden relative flex flex-col lg:flex-row bg-gray-800 text-white h-screen w-full py-10 lg:py-20 lg:px-0">
            <AboutHeader />
            <AboutContent />
        </div>
    );
};

export default About;