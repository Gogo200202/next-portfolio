import React from "react";
import Link from "next/link";
import Image  from "next/image";
import jojo from "../img/jojo.jpg"
export default function MeOnHome () {

  return (<div className=" relative  h-96  w-full">
    <div className=" absolute  top-14 left-11">
    <p>Hey there I am</p>
    <p>Georgi Angelov</p>
    <p>Looking for the start of me career.</p>
    </div>
    <div className=" absolute right-0">

    <Image className=" m-14"  src={jojo} alt="me" width={300} height={300}></Image>
    </div>
    
    
     </div>)
}