import config from "../config";
import { directionEnum } from "../enum/directionEnum";    // 坦克 方向 枚举类型

export default abstract class modelAbstract {
    abstract name:string
    abstract render():void
    abstract image():HTMLImageElement
    protected direction:directionEnum = directionEnum.top
    constructor(protected canvas:CanvasRenderingContext2D,public x:number,public y:number) {
        this.rendomDieection()
    } 
    
    protected rendomDieection(){
        // 坦克生成随机方向
        this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum 
    }
    protected draw(){
        // img 提取图片 --> 草地 墙 等
        this.canvas.drawImage(this.image(),this.x,this.y,config.model.width,config.model.height)
    }
}