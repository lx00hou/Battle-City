import canvasAbstract from "./canvasAbstract";
import model from '../model/wall'
import config from "../config";

class wall extends canvasAbstract implements IModel {
// 草地
    constructor(){
        super()
        super.createModels(config.wall.num,model)
    }
    render():void {
        super.renderModels()
    }
}
export default new wall()