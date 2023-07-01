

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js'
import lights from './_modules/lights.js';






const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xcccccc );


const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0,1,5);


const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );
// renderer.shadowMap.type = THREE.VSMShadowMap;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.enabled = true
// renderer.outputEncoding = THREE.sRGBEncoding
// renderer.toneMapping = THREE.LinearToneMapping
// renderer.toneMappingExposure = 2

const threejs_canvas = document.getElementById("three");
threejs_canvas.appendChild(renderer.domElement);




const controls = new OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(0, 1, 0);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI/2;
controls.minPolarAngle = .01;
controls.minDistance = 4;
controls.maxDistance = 52;
controls.autoRotateSpeed = 6;
controls.enablePan = true;

  

lights(scene);




const material_1 = new THREE.MeshStandardMaterial( { color: 0xffffff } );

const cube = new THREE.Mesh(new THREE.BoxGeometry( 1, 1, 1 ), material_1 );
cube.castShadow = true;
cube.position.y = 1;
scene.add( cube );



const material_2 = new THREE.MeshStandardMaterial( {
    color: 0xffffff,
        roughness: .4, 
        emissive: 0x555555,
        side: THREE.DoubleSide
} );

const plane = new THREE.Mesh( new THREE.PlaneGeometry( 10, 10 ), material_2 );
plane.receiveShadow = true;
plane.rotateX(Math.PI/180 * 90)
scene.add( plane );






function animate() {
    requestAnimationFrame( animate );
    controls.update()    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}

animate();





window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})





