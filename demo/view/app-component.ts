import {View} from "../../core/view";
import {Component} from "../../core/component";

@Component("app")
export class AppComponent extends View {
    componentContent = '';
    body(): Element | HTMLElement | string {
        return `<div> app组件： ${this.componentContent} </div>`;
    }
    onAppear() {
        console.log('app 组件渲染')
        setInterval(()=>{
            this.componentContent = Date.now() + '';
        }, 24)
    }
}
