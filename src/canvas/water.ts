import canvasAbstract from "./canvasAbstract";
import model from '../model/water'
import config from "../config";

class water extends canvasAbstract implements Icanvas {

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
}
export default new water()