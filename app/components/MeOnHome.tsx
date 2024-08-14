import Link from "next/link";
import Image from "next/image";
import Me from "../img/Me.png";
import Laptop from "./laptop";
import ThreeScene from "./ThreeScene";

import React, { useRef, useEffect, useState } from "react";
//import { Animated, Easing, View, StyleSheet, Text } from "react-native";
export default function MeOnHome() {
  //grid grid-cols-1  md:grid-cols-2
  return (
    <div className="  animate-fade w-screen  h-screen  grid  md:flex justify-between p-11   ">
      <div className=" py-28">
        <div className=" text-4xl flex whitespace-pre">
          Hey there
          <p className="animate-wiggle "> 👋</p>
          <p> I am</p>
        </div>

        <p className="text-5xl font-bold">Georgi Angelov</p>

        <p className="text-5xl">I am looking to</p>
        <p className="text-5xl">start my career.</p>
      </div>

      <div>
        <div className="relative">
          <div className=" h-[250px] w-[350px] md:h-[600px] md:w-[900px]">
            <Image className="py-4 " src={Me} alt="me"></Image>
          </div>

          <div className=" absolute rounded-full  w-52 h-52 md:w-96 md:h-96 -z-10 bg-indigo-950  bottom-0 right-20 "></div>
        </div>
      </div>
    </div>
  );
}
