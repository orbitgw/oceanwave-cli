export class OWCreateSubCmd{
    constructor(name:string);
    setCallback(fn:(args:Array)=>void):void;
    exec(args:Array):void
}

export class OWSubCmds{
    private #sub_cmd:Map;
    constructor();
    register(sub_cmd:OWCreateSubCmd):void;
    exec(name:string,...args:any[]):void;
}