import canvasAbstract from "./canvasAbstract";
import model from '../model/steel'
import config from "../config";

class steel extends canvasAbstract implements IModel {
// 草地
    constructor(){
        super()
        super.createModels(config.steel.num,model)
    }
    render():void {
        super.renderModels()
    }
}
export default new steel()