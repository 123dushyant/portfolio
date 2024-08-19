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
        <div className="banner overflow-hidden w-full h-screen bg-customGray brightness-90 ">
        <div className="slider" style={{ "--quantity": 10 }}>
            <div className="item" style={{ "--position": 1 }}>
                <img src={image1} alt="Image 1" />
            </div>
            <div className="item" style={{ "--position": 2 }}>
                <img src={image2} alt="Image 2" />
            </div>
            <div className="item" style={{ "--position": 3 }}>
                <img src={image3} alt="Image 3" />
            </div>
            <div className="item" style={{ "--position": 4 }}>
                <img src={image4} alt="Image 4" />
            </div>
            <div className="item" style={{ "--position": 5 }}>
                <img src={image5} alt="Image 5" />
            </div>
            <div className="item" style={{ "--position": 6 }}>
                <img src={image6} alt="Image 6" />
            </div>
            <div className="item" style={{ "--position": 7 }}>
                <img src={image7} alt="Image 7" />
            </div>
            <div className="item" style={{ "--position": 8 }}>
                <img src={image8} alt="Image 8" />
            </div>
            <div className="item" style={{ "--position": 9 }}>
                <img src={image9} alt="Image 9" />
            </div>
            <div className="item" style={{ "--position": 10 }}>
                <img src={image10} alt="Image 10" />
            </div>
        </div>
        <div className="content w-40">
            <h1 data-content="MY SKILSS">
            </h1>
        <div className="author text-white lg:pl-12 md:pl-6">
            <h2 className=" font-dm-serif text-2xl">ASHISH RANA</h2>
            <p><b>Web Designer</b></p>
            <p className="font-dm-serif font-light">
            I believe in continuous learning and staying updated with the latest trends and advancements in technology. My approach to development is user-centric, ensuring that the end product is intuitive, accessible, and meets the highest standards of quality.
            </p>
        </div>
        <div className="model"></div>
        </div>
    </div>
    );
};

export default Skills;