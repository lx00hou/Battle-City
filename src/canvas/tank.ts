import canvasAbstract from "./canvasAbstract";
import config from "../config";
import model from "../model/tank";
import position from "../service/position";

class tank extends canvasAbstract implements Icanvas {
// 草地
    num():number {
        return config.tank.num
    }
    model(): ModelConstructor {
        return model
    }
    render():void { 
        this.createModels()
        this.renderModels()

        setInterval(() => this.renderModels(), config.timeout)
    }

    protected renderModels(){
        // 先擦除画布对象
        this.canvas.clearRect(0,0,config.canvas.width,config.canvas.height)
        super.renderModels()
    }

    protected createModels(){
        for(let i = 0 ; i < this.num() ; i++){
            const pos = position.position();
            let model = this.model();
            const instance =  new model(this.canvas,pos.x,0)
            this.models.push(instance)
        }
    }
    
}
export default new tank()