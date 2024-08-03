import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
      <div className="relative overflow-hidden">
        <div className="bg-white bg-opacity-75">
          <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
              <div className="flex lg:flex-1">
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Logo</span>
                  <div className="text-black text-2xl md:text-3xl lg:text-3xl no-underline">ASHISH R.</div>
                </Link>
              </div>
              <div className="flex lg:hidden">
                <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                <Link to="/about" className="text-sm font-semibold leading-6 text-black">About</Link>
                <Link to="#" className="text-sm font-semibold leading-6 text-black">Features</Link>
                <Link to="#" className="text-sm font-semibold leading-6 text-black">Marketplace</Link>
                <Link to="#" className="text-sm font-semibold leading-6 text-black">Company</Link>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <Link to="#" className="text-sm font-semibold leading-6 text-black border-2 border-solid border-black px-3 py-1 rounded-full">
                  Contact for Freelance <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </nav>
          </header>
        </div>
      </div>
    );
};

export default Navbar;

