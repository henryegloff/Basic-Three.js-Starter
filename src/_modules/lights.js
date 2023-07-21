
import * as THREE from 'three';



export default function lights(scene) {

    const hemisphere_light = new THREE.HemisphereLight( 0xffffff, 0x222222, .8 ) 
    hemisphere_light.position.set( 0,1,0 )
    scene.add( hemisphere_light )

    const directional_light = new THREE.DirectionalLight( 0xffffff, 1 )
    directional_light.position.set( -1, 10, 0 )
    directional_light.castShadow = true

    const shadow_camera_length = 20;
    directional_light.shadow.mapSize.width = 4096
    directional_light.shadow.mapSize.height = 4096
    directional_light.shadow.radius = 5
    directional_light.shadow.bias = - 0.00006
    directional_light.shadow.camera.near = 1
    directional_light.shadow.camera.far = 14
    directional_light.shadow.camera.left = -shadow_camera_length;
    directional_light.shadow.camera.right = shadow_camera_length;
    directional_light.shadow.camera.top = shadow_camera_length;
    directional_light.shadow.camera.bottom = -shadow_camera_length;

    scene.add( directional_light )

    // const hemisphere_light_helper = new THREE.HemisphereLightHelper( hemisphere_light, 5 )
    // scene.add( hemisphere_light_helper )

    // const directional_light_helper = new THREE.DirectionalLightHelper( directional_light, 5 )
    // scene.add( directional_light_helper )

    // const directional_light_shadow_helper = new THREE.CameraHelper(directional_light.shadow.camera)
    // scene.add(directional_light_shadow_helper)

}


