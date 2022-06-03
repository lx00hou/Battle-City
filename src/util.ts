import steel from "./canvas/steel"
import straw from "./canvas/straw"
import wall from "./canvas/wall"
import water from "./canvas/water"
import config from "./config"

export default {
    // 画布监测
    isCanvasTouch(x:number,y:number,width = config.model.width,height = config.model.height):boolean{
        return  x < 0
            || x + width > config.canvas.width
            || y < 0
            || y + height > config.canvas.height
        //  触碰了 画布 直接返回真  
    },
    //  模型碰撞 监测 
    isModelTouch(
        x:number,y:number,
        width = config.model.width,
        height = config.model.height,
        models = [...wall.models,...steel.models]
        ):IModel | undefined {

            return models.find(model => {
                const state = 
                    x + width <= model.x || x >= model.x + model.width  ||
                    y + height <= model.y || y >= model.y + model.height

                return !state
            })
        }
}