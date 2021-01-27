import {Component} from "./component";
import {View} from "./view";

@Component('root')
export class HelloWorld extends View{
    componentContent:number = 0;

    body(): Element | HTMLElement | string {
        return `
        <div style="display: flex;justify-content: flex-start;align-items: center">
          <span style="width:300px;margin-right: 20px">当前时间：${this.componentContent}</span>
        </div>`;
    }
    onAppear(): void{
        console.log('当视图显示时, 执行定时器')
        setInterval(() => {
            this.componentContent  = Date.now();
        }, 24);
    }
}
