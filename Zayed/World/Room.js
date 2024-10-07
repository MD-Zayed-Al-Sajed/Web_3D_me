import * as THREE from 'three';
import Zayed from "../Zayed.js";

export default class Room {
    constructor() {
        this.sajed_r = new Zayed();
        this.scene = this.sajed_r.scene;

        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        this.scene.add( cube );

    }

    resize() {}
    update() {}
}