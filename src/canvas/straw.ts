import canvasAbstract from "./canvasAbstract";
import model from '../model/straw'
import config from "../config";

class straw extends canvasAbstract implements IModel {
// 草地
    render():void {
        super.drawModels(config.straw.num,model)
    }
}
export default new straw()