import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import play from "../canvas/play";
import _ from 'lodash';
import { directionEnum } from "../enum/directionEnum";
export default class extends modelAbstract implements IModel{
    canvas: ICanvas = play 
    name: string = "play"
    bindEvent:boolean = false
    image():HTMLImageElement{
        let direction = this.name+_.upperFirst(this.direction);
        return image.get(direction as any)!
    }

    render(): void {
        super.draw();
        if(!this.bindEvent){
            this.bindEvent = true;
            document.addEventListener('keydown',this.changeDirection.bind(this));
        }
    }

    changeDirection(event:KeyboardEvent){
        console.log(event.code);
        console.log(event);
        switch(event.code){
            case  'ArrowUp':
                this.direction = directionEnum.top
                break;
            case  'ArrowDown':
                this.direction = directionEnum.bottom
                break;
            case  'ArrowLeft':
                this.direction = directionEnum.left
                break;
            case  'ArrowRight':
                this.direction = directionEnum.right
                break; 
        }
        this.canvas.renderModels()
    }
}