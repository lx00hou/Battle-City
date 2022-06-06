import straw from "./static/images/straw/straw.png";
import wall from "./static/images/wall/wall.gif";
import water from "./static/images/water/water.gif";
import steel from "./static/images/wall/steels.gif";
import tankTop from './static/images/tank/top.gif';
import tankRight from './static/images/tank/right.gif';
import tankBottom from './static/images/tank/bottom.gif';
import tankLeft from './static/images/tank/left.gif';
import bullet from "./static/images/bullet/bullet.jpg";
import boss from './static/images/boss/boss.png'
// 配置文件
export default {
    timeout:25,
    canvas:{
        width:900,
        height:600,
    },
    model:{
        width:30,
        height: 30
    },
    tank:{
        num:10
    },
    straw:{
        num:50,
    },
    wall:{
        num:50
    },
    water:{
        num:10
    },
    steel:{
        num:30
    },
    images:{
        straw,
        wall,
        water,
        steel,
        tankTop,
        tankRight,
        tankBottom,
        tankLeft,
        bullet,
        boss
    }
}