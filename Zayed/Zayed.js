import * as THREE from 'three';

import Sizes from './Utils/Sizes.js';
import Time from './Utils/Time.js';

import Camera from './Camera.js';
import Renderer from './Renderer.js';

export default class Zayed {
    static aim
    constructor(canvas_z) {
        if(Zayed.aim){
            return Zayed.aim
        }
        Zayed.aim = this
        this.canvas = canvas_z;
        this.scene = new THREE.Scene();
        this.sizes = new Sizes();
        this.time = new Time();
        this.camera = new Camera();
        this.renderer = new Renderer();
    }
}