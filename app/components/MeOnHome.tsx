import Link from "next/link";
import Image from "next/image";
import jojo from "../img/test.jpg";
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

        <p className="text-5xl">I am looking to start my career.</p>
      </div>

      <div>
        <div className="relative">
          <Image
            className="py-4 "
            src={jojo}
            width={500}
            height={500}
            alt="me"
          ></Image>
          <div className=" absolute rounded-full  w-52 h-52 -z-10 bg-indigo-950   bottom-0 right-0 "></div>
        </div>
      </div>
    </div>
  );
}
