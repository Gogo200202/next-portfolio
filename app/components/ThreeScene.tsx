'use client'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  let loaded = true ;
  useEffect(() => {
    if (typeof window !== 'undefined') {
    if(loaded){
      loaded=false

      const scene = new THREE.Scene();
      
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(400, 400);
      //0x000000 black
      renderer.setClearColor(0xffffff, 1 );
      //renderer.setClearColor(0x000000, 1 );
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 100;
      camera.position.y = 50;

      const dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
dirLight.position.set( -1, 0.75, 1 );
dirLight.position.multiplyScalar( 50);
dirLight.name = "dirlight";
// dirLight.shadowCameraVisible = true;

scene.add( dirLight );
      const controls = new OrbitControls(camera, renderer.domElement)

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
      //  scene.add(cube);
      

        const objLoader = new OBJLoader()
        
        objLoader.load(
            'laptop/macLaptop.obj',
            (object) => {
                // (object.children[0] as THREE.Mesh).material = material
                // object.traverse(function (child) {
                //     if ((child as THREE.Mesh).isMesh) {
                //         (child as THREE.Mesh).material = material
                //     }
                // })

              
                scene.add(object)
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
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
            },
            (error) => {
                console.log(error)
            }
        )

    




        



      
    }
  }
  }, []);
  
  return <div  ref={containerRef} />;
};
export default ThreeScene;