

import Link from "next/link";
import Image  from "next/image";
import jojo from "../img/test.jpg"

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
  

   

<div><Image  className="py-4" src={jojo} alt="me" ></Image></div>


    
    
     </div>)
}