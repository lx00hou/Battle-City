import config from "../config";
// import {image} from "../service/image";

export default abstract class canvasAbstract{
    //父级 抽象类
    protected items = []
    abstract render():void
    constructor(
        protected app = document.querySelector('#app') as HTMLDivElement,
        protected el = document.createElement('canvas'),
        protected canvas = el.getContext('2d')!
    ){
        this.createdCanvas();
    }

    protected createdCanvas(){

        this.el.width = config.canvas.width;
        this.el.height = config.canvas.height;
        this.app.insertAdjacentElement('afterbegin',this.el)
    }

    protected drawModels(num:number,model:ModelConstructor){
        this.positionCollection(num).forEach(position => {
            const instance =  new model(this.canvas,position.x,position.y)
            instance.render();
            // this.canvas.drawImage(image.get('straw')!,position.x,position.y,config.model.width,config.model.height)
        })
        // Array(num).fill('').forEach(() => {  循环位置赋值 但是无法避免 位置重复
        //     const position = this.position();
        //     this.canvas.drawImage(image.get('straw')!,position.x,position.y,config.model.width,config.model.height)
        // })
    }

    // 批量获取唯一坐标
    protected positionCollection(num:number){
        const collection = [] as {x:number,y:number}[];
        for(let i = 0 ; i < num ; i++){
            while (true){
                const position = this.position();
                const exists = collection.some(c => c.x == position.x && c.y == position.y)
                if(!exists){
                    collection.push(position)
                    break
                }
            }
        }
        return collection
    }

    protected position(){
        // 返回 随机位置
        return {
            x:Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
            y:Math.floor(Math.random() * (config.canvas.height / config.model.height)) * config.model.height
        }
    }
}