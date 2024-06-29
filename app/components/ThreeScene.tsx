"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  let loaded = true;
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (loaded) {
        loaded = false;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera();
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(400, 400);
        //0x000000 black
        renderer.setClearColor(0xffffff, 1);
        // renderer.setClearColor(0x000000, 1);
        containerRef.current?.appendChild(renderer.domElement);
        camera.position.z = 0.5;
        camera.position.y = 0.5;
        camera.position.x = 0.5;

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
        dirLight.position.set(5, 10, 7.5);
        dirLight.position.multiplyScalar(50);

        scene.add(dirLight);
        const controls = new OrbitControls(camera, renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        //scene.add(cube);

        const objLoader = new OBJLoader();

        objLoader.load(
          "laptop/BM86_Portable.obj",
          (object) => {
            const texture = new THREE.TextureLoader().load(
              "laptop/BM86_Portable_BaseColorOFF.png"
            );

            const material = new THREE.MeshStandardMaterial({ map: texture });

            object.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                child.material = material;
              }
            });

            scene.add(object);
            // Render the scene and camera
            renderer.render(scene, camera);
            // Add this function inside the useEffect hook
            const renderScene = () => {
              //object.rotation.x += 0.01;
              object.rotation.y += 0.01;
              renderer.render(scene, camera);
              requestAnimationFrame(renderScene);
            };

            // Call the renderScene function to start the animation loop
            renderScene();
          },
          (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }, []);

  return <div ref={containerRef} />;
};
export default ThreeScene;
