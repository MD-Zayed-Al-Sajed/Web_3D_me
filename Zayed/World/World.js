import * as THREE from 'three';
import Zayed from "../Zayed.js";

import Room from "./Room.js"

export default class World {
    constructor() {
        this.sajed_w = new Zayed();
        this.sizes_r = this.sajed_w.sizes;
        this.scene_r = this.sajed_w.scene;
        this.canvas_r = this.sajed_w.canvas;
        this.camera_r = this.sajed_w.camera;

        this.room = new Room();

    }

    resize() {}
    update() {}
}