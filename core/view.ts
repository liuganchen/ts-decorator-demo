export abstract class View{
    abstract body():Element | HTMLElement | string;

    /**
     * 视图出现时
     */
    onAppear():void{
    }
}
