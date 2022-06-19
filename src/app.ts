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
import audio from './service/audio';

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width +'px'
app.style.height = config.canvas.height +'px'

export default {
    iaStart:false,
    state:0,    
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
        audio.start()
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
        tank.stop();
        bullet.stop();
        this.endText();
        console.log('游戏结束');
    },
    endText(){
        const el = document.createElement('canvas')
        el.width = config.canvas.width 
        el.height = config.canvas.height
        const ctx = el.getContext('2d')!
        ctx.fillStyle = 'red'
        ctx.font = '80px CascadiaMono'
        ctx.textBaseline = 'middle'
        ctx.textAlign = 'center'
        ctx.fillText(this.state == 1 ? '赢得胜利' : '游戏失败', config.canvas.width / 2 , config.canvas.height / 2)
        app.appendChild(el)
    }
} 
