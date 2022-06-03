import config from "../config";
import { directionEnum } from "../enum/directionEnum";    // 坦克 方向 枚举类型
import { promises } from "../service/image";

export default abstract class modelAbstract {
    abstract name:string
    abstract render():void
    abstract image():HTMLImageElement
    abstract canvas:ICanvas
    public direction:directionEnum = directionEnum.top
    public width:number = config.model.width
    public  height:number = config.model.height

    constructor(public x:number,public y:number) {
        this.randomDirection()
    } 
    
    protected randomDirection(){
        // 坦克生成随机方向
        this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum 
    }
    protected draw(){
        // img 提取图片 --> 草地 墙 等
        this.canvas.ctx.drawImage(this.image(),this.x,this.y,config.model.width,config.model.height)
    }
    public destory(){
        // 去画布中 移除 元素
        this.canvas.removeModel(this);
        this.canvas.renderModels();
    }

    protected blast(model:IModel){
        Array(...Array(8).keys()).reduce((promise,index) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    const img = new Image
                    img.src = `/src/static/images/blasts/blast${index}.gif`
                    img.onload = () => {
                        this.canvas.ctx.drawImage(img,model.x,model.y,model.width,model.height)
                        resolve(promise)
                    }
                },100)
            })
        },Promise.resolve())
    }
}