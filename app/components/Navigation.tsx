'use client'
import React from "react";
import Link from "next/link";
import { useState } from 'react';

export default function Navbar () {
//let buttonCssName="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
const [state, setState] = useState("items-center justify-between hidden w-full md:flex md:w-auto md:order-1");

function ButtonClick(){
  if(state=="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"){
    setState("items-center justify-between  w-full md:flex md:w-auto md:order-1");
  }else if(state=="items-center justify-between  w-full md:flex md:w-auto md:order-1"){
    setState("items-center justify-between hidden w-full md:flex md:w-auto md:order-1")
  }

console.log(state);
}

  return (
    <>
   

   

<nav className="bg-white border-gray-200 dark:bg-black">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">My portfolio</span>
  
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={ButtonClick} aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className={state} id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
      <li>
        <Link href="/" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
      </li>
      <li>
        <Link href="/About" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
      </li>
      <li>
        <Link href="ContactMe" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>

     {/* <header classNameName="relative h-14">
     <div classNameName="fixed top-0 left-0 md:flex gap-x-6 p-4">My portfolio </div>
            <ul classNameName=" fixed top-0 right-0 md:flex gap-x-6  p-4">
              
            <li>
                <Link href="/">
                  <p classNameName={buttonCssName}>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/About">
                  <p classNameName={buttonCssName}>About me</p>
                </Link>
              </li>
              
              <li>
                <Link href="/ContactMe">
                  <p classNameName={buttonCssName}>Contacts me</p>
                </Link>
              </li>
            </ul>
            
          </header>
   */}
    </>
  );
};

