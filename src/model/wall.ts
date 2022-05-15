import { image } from "../service/image";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract{
    render(): void {
        super.draw(image.get('wall')!)
    }
}