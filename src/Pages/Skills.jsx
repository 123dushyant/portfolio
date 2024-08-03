import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";

const Skills = () => {
    return (
        <div className="banner relative overflow-hidden w-full h-screen bg-customGray flex items-center justify-center">
            <div className="slider absolute inset-0 flex">
                <div className="flex w-full h-full">
                    {[image1, image2, image3, image4, image5, image6, image7, image8, image9, image10].map((image, index) => (
                        <div key={index} className="item flex-shrink-0 w-full h-full">
                            <img src={image} alt={`Image ${index + 1}`} className="object-cover w-full h-full" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="content relative z-10 text-center text-white p-5 md:p-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">MY SKILLS</h1>
                <div className="author">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-2">ASHISH RANA</h2>
                    <p className="text-lg md:text-xl mb-4"><b>Web Designer</b></p>
                    <p className="text-base md:text-lg">
                        I believe in continuous learning and staying updated with the latest trends and advancements in technology. My approach to development is user-centric, ensuring that the end product is intuitive, accessible, and meets the highest standards of quality.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Skills;