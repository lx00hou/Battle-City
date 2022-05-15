import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
export default class extends modelAbstract implements IModel{
    render(): void {
        super.draw(image.get('steel'))
    }
}