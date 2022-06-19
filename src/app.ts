import './style.scss'
import config from './config'
import "./service/image"
import {promises} from "./service/image";
import straw from "./canvas/straw";
import wall from './canvas/wall';
import water from './canvas/water';
import steel from './canvas/steel';
import tank from './canvas/tank';
import bullet from './canvas/bullet';
import boss from './canvas/boss';
import play from './canvas/play';

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width +'px'
app.style.height = config.canvas.height +'px'

export default {
    iaStart:false,
    state:0,    // state 非0 代表游戏结束
    inteval:0,
    bootstrap(){
        app.addEventListener('click', async () => {
            await this.start();
            this.inteval = setInterval(() => {
                if(!tank.models.length) this.state = 1;
                if(!play.models.length || !boss.models.length) this.state  = 2;
                if(this.state) this.end()
            })
        })
        
    },
    async start() {
        if(this.iaStart) return
        this.iaStart = true;
        app.style.backgroundImage = "none"; 
        await Promise.all(promises)  // 加载贴图
        straw.render()
        wall.render()
        water.render()
        steel.render()
        tank.render()
        bullet.render()
        boss.render()
        play.render()
    },
    async end(){
        clearInterval(this.inteval);
        console.log('游戏结束');
    }
} 
