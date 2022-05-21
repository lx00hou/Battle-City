import canvasAbstract from "./canvasAbstract";
import model from '../model/wall'
import config from "../config";

class wall extends canvasAbstract implements Icanvas {
    
    num():number {
        return config.wall.num
    }
    model(): ModelConstructor {
        return model
    }
    render():void {
        super.createModels()
        super.renderModels()
    }
}
export default new wall()