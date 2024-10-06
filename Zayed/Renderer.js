import * as THREE from 'three';
import Zayed from "./Zayed.js";

export default class Renderer {
    constructor() {
        this.sajed_r = new Zayed();
        this.sizes_r = this.sajed_r.sizes;
        this.scene_r = this.sajed_r.scene;
        this.canvas_r = this.sajed_r.canvas;
        this.camera_r = this.sajed_r.camera;

        console.log(this.camera_r, this.camera_r.perspectiveCamera);

        this.setRenderer();
    }
    setRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas_r,
            antialias: true
        });
        this.renderer.physicallyCorrectLights = true;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.CineonToneMapping;
        this.renderer.toneMappingExposure = 1.75;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setSize(this.sizes_r.width, this.sizes_r.height);
        this.renderer.setPixelRatio(this.sizes_r.pixelRatio);
    }
    resize() {
        this.renderer.setSize(this.sizes_r.width, this.sizes_r.height);
        this.renderer.setPixelRatio(this.sizes_r.pixelRatio);
    }
    update() {
        this.renderer.render(this.scene_r, this.camera_r.perspectiveCamera);
    }
}