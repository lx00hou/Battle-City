import canvasAbstract from "./canvasAbstract";
import model from '../model/water'
import config from "../config";

class water extends canvasAbstract implements IModel {
// 草地
    constructor(){
        super()
        super.createModels(config.water.num,model)
    }
    render():void {
        super.renderModels()
    }
}
export default new water()