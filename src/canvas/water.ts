import canvasAbstract from "./canvasAbstract";
import model from '../model/water'
import config from "../config";

export default new ( class extends canvasAbstract implements ICanvas {
    num():number {
        return config.water.num
    }
    model(): ModelConstructor {
        return model
    }
    render():void {
        super.createModels()
        super.renderModels()
    }
})('water')