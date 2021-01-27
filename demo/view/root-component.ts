import {Component} from "../../core/component";
import {View} from "../../core/view";

@Component('root')
export class RootComponent extends View{
    componentContent:number = 0;

    body(): Element | HTMLElement | string {
        return `
        <div>
          <span>root 组件 -> 当前时间：${this.componentContent}</span>
        </div>`;
    }
    onAppear(): void{
        console.log('当视图显示时, 执行定时器')
        setInterval(() => {
            this.componentContent  = Date.now();
        }, 24);
    }
}
