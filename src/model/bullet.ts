import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import bullet from "../canvas/bullet";
export default class extends modelAbstract implements IModel{
    canvas: ICanvas = bullet 
    name: string = 'bullet'
    image():HTMLImageElement{
        return image.get('bullet')!
    }
    render(): void {
        super.draw()
    }
}