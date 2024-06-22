import React from "react";
import Link from "next/link";

export default function Navbar () {
let buttonCssName="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"

  return (
    <>
   
     <header className="relative h-14">
     <div className="fixed top-0 left-0 md:flex gap-x-6 p-4">My portfolio </div>
            <ul className=" fixed top-0 right-0 md:flex gap-x-6  p-4">
              
            <li>
                <Link href="/">
                  <p className={buttonCssName}>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/About">
                  <p className={buttonCssName}>About me</p>
                </Link>
              </li>
              
              <li>
                <Link href="/ContactMe">
                  <p className={buttonCssName}>Contacts me</p>
                </Link>
              </li>
            </ul>
            
          </header>
  
    </>
  );
};

