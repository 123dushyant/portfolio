import React from "react";

const Navbar =() => {
    return(
        <div className="home w-full h-12 bg-transparent">
            <div className="nev-text text-white font-thin flex justify-center lg:text-xl mt-6 space-x-12 ">
             <h1 className="text1">HOME</h1>
             <h1 className="text2">PROJECTS</h1>
             <h1 className="text3">ABOUT</h1>
             <h1 className="text4 ">RESUME</h1>
            </div>
            <button className="flex justify-end boreder-44"> let's collaborate</button>
            
        </div>
    )
}

export default Navbar;