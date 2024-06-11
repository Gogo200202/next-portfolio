import React from "react";
import Link from "next/link";


export default function Navbar () {
  return (
    <>
    <div>
      <div className="w-full h-20  bg-blue-950 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            
            <ul className="hidden md:flex gap-x-6 text-white">
            <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/About">
                  <p>About me</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/ContactMe">
                  <p>Contacts me</p>
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

