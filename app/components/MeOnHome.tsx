

import Link from "next/link";
import Image  from "next/image";
import jojo from "../img/jojo.png"
import Laptop from "./laptop";
import ThreeScene from "./ThreeScene";

import React, { useRef, useEffect, useState } from "react";
//import { Animated, Easing, View, StyleSheet, Text } from "react-native";
export default function MeOnHome () {

  //grid grid-cols-1  md:grid-cols-2
  return (<div className="  animate-fade w-full  grid  md:flex justify-between p-11   ">

<div className="text-2xl py-4">

    <div className="flex whitespace-pre">
      Hey there
      <p className="animate-wiggle"> 👋</p>
      <p> I am</p> 
       </div>

       <p>Georgi Angelov</p>

       <p>I am looking to start my career.</p>
       
</div>
  
<ThreeScene/>
   

<div className="relative">
  <Image  className="py-4 " src={jojo} width={300} height={300} alt="me" ></Image>
  <div className=" absolute rounded-full  w-52 h-52 -z-10 bg-indigo-950   bottom-0 right-0 "></div>
  </div>


    
    
     </div>)
}