import config from "../config";
import position from "../service/position";

export default abstract class canvasAbstract{
    //父级 抽象类
    public models:IModel[] = []
    abstract num():number
    abstract model():ModelConstructor | BulletModelConstructor
    abstract render():void
    constructor(
        protected name:string,
        protected app = document.querySelector('#app') as HTMLDivElement,
        protected el = document.createElement('canvas'),
        public ctx = el.getContext('2d')!
    ){
        this.createdCanvas();
    }
    //  创建画布
    protected createdCanvas(){

        this.el.width = config.canvas.width;
        this.el.height = config.canvas.height; 
        this.el.setAttribute('name',this.name)
        this.app.insertAdjacentElement('afterbegin',this.el)
    }

    //  生成模型实例
    protected createModels(){
        position.getCollection(this.num()).forEach(position => {
            let model = this.model() as ModelConstructor;
            const instance =  new model(position.x,position.y)
            this.models.push(instance)
        })
        // Array(num).fill('').forEach(() => {  循环位置赋值 但是无法避免 位置重复
        //     const position = this.position();
        //     this.canvas.drawImage(image.get('straw')!,position.x,position.y,config.model.width,config.model.height)
        // })
    }
    //  将模型(除了坦克模型)渲染到画布上
    protected renderModels(){
        this.ctx.clearRect(0,0,config.canvas.width,config.canvas.height)
        this.models.forEach(model => model.render())
    }
    //  对 子弹 以及 砖墙 的销毁
    public removeModel(model:IModel){
        this.models = this.models.filter(m => m !== model)
    }

}