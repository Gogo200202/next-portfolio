

import Link from "next/link";
import Image  from "next/image";
import jojo from "../img/test.jpg"

import React, { useRef, useEffect, useState } from "react";
//import { Animated, Easing, View, StyleSheet, Text } from "react-native";
export default function MeOnHome () {

   
  return (<div className="mx-auto grid grid-cols-1  md:grid-cols-2">

<div className="text-2xl">

    <div className="flex whitespace-pre">
      Hey there
      <p className="animate-wiggle"> 👋</p>
      <p> I am</p> 
       </div>

       <p>Georgi Angelov</p>
       <p>I am looking to start my career.</p>
</div>
  
    
   


<Image  className="" src={jojo} alt="me" ></Image>

    
    
     </div>)
}