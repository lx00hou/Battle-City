export default{
    el(id:string){
        return document.querySelector<HTMLAudioElement>(id)!
    },
    start(){
        this.el('#begin').play()
    },
    file(){
        this.el('#bullet').play()
    },
    blast(){
        this.el('#blast').play()
    }
}