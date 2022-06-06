import canvasAbstract from "./canvasAbstract";
import config from "../config";
import model from "../model/boss";
import position from "../service/position";

export default new ( class extends canvasAbstract implements ICanvas {
    num():number {
        return 0
    }
    model(): ModelConstructor {
        return model
    }
    render():void { 
        this.createModels()
        super.renderModels()
    }
    protected createModels(){
        [{x:config.canvas.width /2 , y : config.canvas.height - config.model.height}].forEach(position => {
            let model = this.model() as ModelConstructor;
            const instance =  new model(position.x,position.y)
            this.models.push(instance)
        })
    }
    
})('boss')