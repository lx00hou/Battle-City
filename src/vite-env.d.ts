/// <reference types="vite/client" />
interface ModelConstructor{
    new(x:number,y:number):IModel
}

interface BulletModelConstructor{
    new (tank:IModel):IModel
}
interface IModel{
    render():void
    tank?:IModel
    x:number
    y:number
    width:number
    height:number
    image():HTMLImageElement
    direction:string
}

interface ICanvas{
    num():number
    model():ModelConstructor | BulletModelConstructor
    ctx:CanvasRenderingContext2D
    removeModel(model:IModel):void 
}