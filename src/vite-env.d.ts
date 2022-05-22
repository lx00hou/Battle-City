/// <reference types="vite/client" />
interface ModelConstructor{
    new(x:number,y:number):IModel
}
interface IModel{
    render():void
    x:number
    y:number
    width:number
    height:number
    image():HTMLImageElement
}

interface ICanvas{
    num():number
    model():ModelConstructor
    ctx:CanvasRenderingContext2D
}