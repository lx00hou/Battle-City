import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import _ from 'lodash'
import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import water from "../canvas/water";
import wall from "../canvas/wall";
import steel from "../canvas/steel";
import tank from "../canvas/tank";
import util from "../util";
export default class extends modelAbstract implements IModel{
    canvas: ICanvas = tank 

    name:string = 'tank'
    render(): void
    {
        this.move()
        /*
        * 增加坦克向下 移动概率
        * */
        // Math.floor(Math.random() * 5) == 1
        if(_.random(20) == 1){
            this.direction = directionEnum.bottom
        }
    }
   protected move():void {
        //坦克的位置 移动
        while (true){
            let x = this.x;
            let y = this.y;
            switch(this.direction){
                case directionEnum.top:
                    y--
                    break
                case directionEnum.right:
                    x++
                    break
                case directionEnum.bottom:
                    y++
                    break
                case directionEnum.left:
                    x--
                    break
            }
            if(util.isModelTouch(x,y) || util.isCanvasTouch(x,y)){
                this.randomDirection()
            }else {
                this.x = x;
                this.y = y;
                break
            }
        }

        super.draw()
   }

  

    image():HTMLImageElement{
        //  贴图
        let direction = this.name + _.upperFirst(this.direction)
        return image.get(direction as keyof typeof config.images)!
    }
}