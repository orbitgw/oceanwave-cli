import { OWTypeError } from "../exception/exception.js";

export class OWCreateSubCmd{
    constructor(name){
        this.name = name
    }
    setCallback(fn){
        this.callback = fn
        if(typeof(fn) != "function"){
            throw new OWTypeError("The \"fn\" argument must be a function")
        }
    }
    exec(args){
        this.callback(args)
    }
}

export class OWSubCmds{
    #sub_cmd;
    constructor(){
        this.#sub_cmd = new Map();
    }
    register(sub_cmd){
        this.#sub_cmd.set(sub_cmd.name,sub_cmd)
    }

    exec(name,...args){
        try{
            var sub_cmd = this.#sub_cmd.get(name)
            sub_cmd.exec(args)
        }catch(err){
            console.log(err)
        }
    }
}