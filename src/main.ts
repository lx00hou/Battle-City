import './style.scss'
import config from './config'
import "./service/image"
import {promises} from "./service/image";
import straw from "./canvas/straw";
import wall from './canvas/wall';
import water from './canvas/water';
import steel from './canvas/steel';

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width +'px'
app.style.height = config.canvas.height +'px'

async function bootstrap() {
    await Promise.all(promises)  // 加载贴图
    straw.render()
    wall.render()
    water.render()
    steel.render()
}
void bootstrap()
