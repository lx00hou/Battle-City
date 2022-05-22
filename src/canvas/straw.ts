import canvasAbstract from "./canvasAbstract";
import model from '../model/straw'
import config from "../config";

class straw extends canvasAbstract implements ICanvas {
// 草地
    num():number {
        return config.straw.num
    }
    model(): ModelConstructor {
        return model
    }
    render():void {
        super.createModels()
        super.renderModels()
    }
    
}
export default new straw()