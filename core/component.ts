import 'reflect-metadata'

const nodeMap:Map<string ,HTMLElement | Element | any> = new Map();
/**
 * 1, 把类进行实例化生成单例对象，存入container中，key 值使用target key
 * 2，实例化后，调用body(), 渲染视图
 */
interface ConstructableFunction extends Function {
    new (): any;
}
export function Component (nodeId: string): Function {
    return  (target: ConstructableFunction) => {
        const ins = new target();
        // 第一次插入视图
        updateView(ins, nodeId);
        // 监听属性变更
        Reflect.defineProperty(ins, 'componentContent', {
            get(){
              return ins._componentContent || ins.componentContent;
            },
            set(value:any) {
                ins._componentContent = value;
                updateView(ins, nodeId);
            }
        })
        // 执行生命周期
        ins.onAppear();
    }
}

/**
 * 更新目标视图
 * @param ins
 * @param nodeId
 */
function updateView(ins:any, nodeId:string){
    let hostView:Element | HTMLElement | any | null = null;
    if(!nodeMap.has(nodeId)){
        hostView =  document.getElementById(nodeId)!;
    }else {
        hostView = nodeMap.get(nodeId);
    }
    if(!hostView){
        return;
    }
    hostView.innerHTML = ins.body();
}
