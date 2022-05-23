import canvasAbstract from "./canvasAbstract";
import bullet from '../model/bullet'

export default new (class extends canvasAbstract implements ICanvas {
    num():number {
        return 0
    }
    model(): ModelConstructor {
        return model
    }
    render():void {
        super.createModels()
        super.renderModels()
    }
})('bullet')