import canvasAbstract from "./canvasAbstract";
import model from '../model/steel'
import config from "../config";

class steel extends canvasAbstract implements Icanvas {
    num():number {
        return config.steel.num
    }
    model(): ModelConstructor {
        return model
    }
    render():void {
        super.createModels()
        super.renderModels()
    }
     
}
export default new steel()