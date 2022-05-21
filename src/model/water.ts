import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
export default class extends modelAbstract implements IModel{
    name: string = "water"
    image():HTMLImageElement{
        return image.get('water')!
    }
    render(): void {
        super.draw()
    }
}