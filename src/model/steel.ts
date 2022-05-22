import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import steel from "../canvas/steel";
export default class extends modelAbstract implements IModel{
    canvas: ICanvas = steel 
    name: string = 'steel'
    image():HTMLImageElement{
        return image.get('steel')!
    }
    render(): void {
        super.draw()
    }
}