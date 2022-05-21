import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
export default class extends modelAbstract implements IModel{
    name: string = 'steel'
    image():HTMLImageElement{
        return image.get('steel')!
    }
    render(): void {
        super.draw()
    }
}