import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import _ from 'lodash'
import config from "../config";
import { directionEnum } from "../enum/directionEnum";

export default class extends modelAbstract implements IModel{
    name:string = 'tank'
    image():HTMLImageElement{
        //  贴图
        let direction = this.name + _.upperFirst(this.direction)
        return image.get(direction as keyof typeof config.images)!
    }
    render(): void {
        this.move()
    }
   protected move():void {
        switch(this.direction){
            case directionEnum.top:
                this.y--
                break
            case directionEnum.right:
                this.x++
                break
            case directionEnum.bottom:
                this.y++
                break
            case directionEnum.left:
                this.x--
                break
        }
        super.draw()
   }
}