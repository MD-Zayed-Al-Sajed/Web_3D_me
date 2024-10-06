import * as THREE from 'three';
import Zayed from './Zayed.js';

export default class Camera {
    constructor() {
        this.sajed = new Zayed();
        this.sizes_c = this.sajed.sizes;
        this.scene_c = this.sajed.scene;
        this.canvas_c = this.sajed.canvas;

        this.createPerspectiveCamera();
        this.createOrthographicCamera();
    }

    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35,
            this.sizes_c.aspect,
            0.1,
            1000
        );
        this.scene_c.add(this.perspectiveCamera);
        this.perspectiveCamera.position.z = 5;

    }

    createOrthographicCamera() {
        this.clip_volume = 10;
        this.OrthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes_c.aspect * this.sizes_c.clip_volume) / 2,
            (this.sizes_c.aspect * this.sizes_c.clip_volume) / 2,
            this.sizes_c.clip_volume / 2,
            -this.sizes_c.clip_volume / 2,
            -100,
            100
        );
        this.scene_c.add(this.OrthographicCamera);

    }
    resize() {
        //updating perspective camera on resize
        this.perspectiveCamera.aspect = this.sizes_c.aspect;
        this.perspectiveCamera.updateProjectionMatrix();

        //updating orthographic camera on resize
        this.OrthographicCamera.left = (-this.sizes_c.aspect * this.sizes_c.clip_volume) / 2;
        this.OrthographicCamera.right = (this.sizes_c.aspect * this.sizes_c.clip_volume) / 2;
        this.OrthographicCamera.top = this.sizes_c.clip_volume / 2;
        this.OrthographicCamera.bottom = -this.sizes_c.clip_volume / 2;
        this.OrthographicCamera.updateProjectionMatrix();
    }

    update() {}
}