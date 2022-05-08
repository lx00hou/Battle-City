import {image} from "../service/image";
import config from "../config";

export default abstract class modelAbstract {
    constructor(protected canvas:CanvasRenderingContext2D,protected x:number,protected y:number) {
        this.canvas.drawImage(image.get('straw')!,x,y,config.model.width,config.model.height)
    }
}