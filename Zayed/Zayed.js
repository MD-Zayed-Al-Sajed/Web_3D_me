import * as THREE from 'three';

import Sizes from './Utils/Sizes.js';
import Time from './Utils/Time.js';
import Resources from "./Utils/Resources.js";
import assets from "./Utils/assets.js";

import Camera from './Camera.js';
import Renderer from './Renderer.js';

import World from "./World/World.js";

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
        this.resources = new Resources(assets);
        this.world = new World();

        this.time.on("update", () => {
            this.update();
        })
        this.sizes.on("resize", () => {
            this.resize();
        })
    }

    update() {
        this.camera.update();
        this.renderer.update();
    }
    resize() {
        this.camera.resize();
        this.renderer.resize();
    }
}