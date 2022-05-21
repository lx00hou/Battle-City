import config from "../config";

type positionType = {x:number,number}
class position{
    constructor(){}
    collection:positionType[] = [];
    public getCollection(num:number){
          // 批量获取唯一坐标
        const collection = [] as {x:number,y:number}[];
        for(let i = 0 ; i < num ; i++){
            while (true){
                const position = this.position();
                const exists = collection.some(c => c.x == position.x && c.y == position.y)
                if(!exists){
                    collection.push(position)
                    this.collection.push(position)
                    break
                }
            }
        }
        return collection
    }
    public position(){
        // 返回 随机位置
        return {
            x:Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
            y:Math.floor(Math.random() * (config.canvas.height / config.model.height - 5)) * config.model.height + config.model.height * 2
        }
    }
}

export default new position()