import canvasAbstract from "./canvasAbstract";
import model from '../model/bullet';
import tank from './tank';
import bullet from "../model/bullet";
export default new (class extends canvasAbstract implements ICanvas {
    num():number {
        return 0
    }
    model(): BulletModelConstructor {
        return model
    }
    render():void {
        setInterval(() => {
            this.createBullet();
            this.renderModels()
        },100)
    }
    createBullet(){
        tank.models.forEach(tank => {
            const isExists = this.models.some(m => m.tank == tank)
            if(!isExists){
                this.models.push(new bullet(tank))
            }
        })
    }

})('bullet')