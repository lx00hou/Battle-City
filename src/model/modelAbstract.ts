import config from "../config";

export default abstract class modelAbstract {
    abstract render():void
    constructor(protected canvas:CanvasRenderingContext2D,protected x:number,protected y:number) {} 
    protected draw(img:HTMLImageElement){
        // img 提取图片 --> 草地 墙 等
        this.canvas.drawImage(img!,this.x,this.y,config.model.width,config.model.height)
    }
}