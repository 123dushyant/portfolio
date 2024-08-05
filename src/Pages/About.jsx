import React from 'react';
import AboutHeader from '../components/AboutHeader';
import AboutContent from '../components/AboutContent';

const About = () => {
    return (
        <div className=" about overflow-hidden relative flex flex-col lg:flex-row bg-customGray text-white h-screen w-full pointer-events-none brightness-900 ">
            <AboutHeader />
            <AboutContent />
        </div>
    );
};

export default About;