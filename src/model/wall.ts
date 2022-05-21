import { image } from "../service/image";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract{
    name: string = "wall"
    image():HTMLImageElement{
        return image.get('wall')!
    }
    render(): void {
        super.draw()
    }
}