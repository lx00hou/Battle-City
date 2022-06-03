import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import bullet from "../canvas/bullet";
import config from "../config";
import {directionEnum} from "../enum/directionEnum";
import util from "../util";
export default class extends modelAbstract implements IModel{
    canvas: ICanvas = bullet 
    name: string = 'bullet'
    constructor(public tank:IModel ) {
        super(tank.x+config.model.width / 2 ,tank.y+config.model.height / 2);
        this.direction = tank.direction as unknown as directionEnum
    }
    image():HTMLImageElement{
        return image.get('bullet')!
    }
    render(): void {
        let x = this.x;
        let y = this.y;

        switch(this.direction){
            case directionEnum.top:
                y -= 2
                break
            case directionEnum.right:
                x += 2
                break
            case directionEnum.bottom:
                y += 2
                break
            case directionEnum.left:
                x -= 2
                break
        }
        /**
         *  destory:Function --> 销毁子弹
         *  touchModel.destory：Function --> 模型消失
         *  blast：Funtion --> 爆炸效果
         */
        // 
        const touchModel = util.isModelTouch(x,y,2,2)
        if(util.isCanvasTouch(x,y,2,2)){ 
            // 子弹监测到 碰撞画布 执行移除
            this.destory()
        }else if(touchModel){
            // 碰撞到 其他模型(砖墙等)
            this.destory()    
            if(touchModel.name !== 'steel') touchModel.destory()   
             this.blast(touchModel) 
        }else {
            this.x = x;
            this.y = y;
            this.draw()
        }

    }

    protected draw(){
        // img 提取图片 --> 草地 墙 等
        this.canvas.ctx.drawImage(this.image(),this.x,this.y,2,2)
    }
}