"use client";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  let [animation, setAnimation] = useState("hidden");
  let loaded = true;
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (loaded) {
        loaded = false;
        const texture = new THREE.TextureLoader().load(
          "laptop/BM86_Portable_BaseColorOFF.png"
        );
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera();
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(500, 500);
        //0x000000 black
        renderer.setClearColor(0xffffff, 1);
        //renderer.setClearColor(0x000000, 1);
        containerRef.current?.appendChild(renderer.domElement);
        camera.position.z = 2;
        camera.position.y = 2;
        camera.position.x = 2;

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
        dirLight.position.set(5, 5, 5);
        dirLight.position.multiplyScalar(50);

        scene.add(dirLight);
        const controls = new OrbitControls(camera, renderer.domElement);

        // const geometry = new THREE.BoxGeometry();
        // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        // const cube = new THREE.Mesh(geometry, material);
        //scene.add(cube);

        const mtlLoader = new MTLLoader();

        mtlLoader.load(
          "laptop/pcAndDesk.mtl",
          (materials) => {
            materials.preload();

            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load(
              "laptop/pcAndDesk.obj",
              (object) => {
                scene.add(object);
              },
              (xhr) => {
                let result = (xhr.loaded / xhr.total) * 100;
                console.log(result + "% loaded");
                if (result >= 100) {
                  setAnimation("animate-fade");
                }
              },
              (error) => {
                console.log("An error happened");
              }
            );
          },
          (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
          },
          (error) => {
            console.log("An error happened");
          }
        );

        const renderScene = () => {
          //object.rotation.x += 0.01;
          if (scene.children[1] != undefined) {
            scene.children[1].rotation.y += 0.005;
          }
          renderer.render(scene, camera);
          requestAnimationFrame(renderScene);
        };

        // Call the renderScene function to start the animation loop
        renderScene();
      }
    }
  }, []);

  return <div className={animation} ref={containerRef} />;
};
export default ThreeScene;
