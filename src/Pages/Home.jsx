import React from 'react';
import HomeContent from '../components/HomeContent';

const Home = () => {
    return (
        <section className="home relative flex flex-col justify-center items-center bg-customGray text-white font-ubuntu h-screen w-full overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full pointer-events-none">
                <HomeContent />
            </div>
        </section>
    );
};

export default Home;