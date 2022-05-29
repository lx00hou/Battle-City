import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import bullet from "../canvas/bullet";
import config from "../config";
import {directionEnum} from "../enum/directionEnum";
export default class extends modelAbstract implements IModel{
    canvas: ICanvas = bullet 
    name: string = 'bullet'
    constructor(public tank:IModel ) {
        super(tank.x+config.model.width / 2 ,tank.y+config.model.height / 2);
        this.direction = tank.direction as unknown as directionEnum
    }
    image():HTMLImageElement{
        return image.get('bullet')!
    }
    render(): void {
        super.draw()
    }
}