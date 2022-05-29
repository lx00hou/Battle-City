import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import _ from 'lodash'
import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import water from "../canvas/water";
import wall from "../canvas/wall";
import steel from "../canvas/steel";
import tank from "../canvas/tank";
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
            if(this.isTouch(x,y)){
                this.randomDirection()
            }else {
                this.x = x;
                this.y = y;
                break
            }
        }

        super.draw()
   }
   protected isTouch(x:number,y:number):boolean {
       if (x < 0
           || x + this.width > config.canvas.width
           || y < 0
           || y + this.height > config.canvas.height
       ) return true
       const models = [...water.models,...wall.models,...steel.models]
       return models.some(model => {
           const state = x + this.width <= model.x || x >= model.x + model.width  ||
                        y + this.height <= model.y || y >= model.y + model.height

           return !state
       })
   }
    image():HTMLImageElement{
        //  贴图
        let direction = this.name + _.upperFirst(this.direction)
        return image.get(direction as keyof typeof config.images)!
    }
}