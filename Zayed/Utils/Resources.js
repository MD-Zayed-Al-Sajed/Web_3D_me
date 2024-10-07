import {EventEmitter} from 'events';
import Zayed from '../Zayed.js';

export default class Resources extends EventEmitter {
    constructor(assets) {
        super();
        this.sajed_re = new Zayed();
        this.renderer = this.sajed_re.renderer;

        this.assets = assets;
        console.log(this.assets);
    }
}