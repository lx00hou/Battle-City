import canvasAbstract from "./canvasAbstract";
import model from '../model/straw'
import config from "../config";

class straw extends canvasAbstract implements IModel {
// 草地
    constructor(){
        super()
        super.createModels(config.straw.num,model)
    }
    render():void {
        super.renderModels()
    }
}
export default new straw()