import { lib } from "../lib/index.js"

function isOWProjExists(){
    return lib.fs.fileExists('oceanwave.json')
}
 
let oceanwave_cfg = {
    name:null,
    entry:"./app.js",
    output:"./dist",
    external_module:{}
}

export function cmd_init(args){
    var proj_name = args[0]
    var opt_force = (args[1].force == undefined) ? false : true
    var opt_lite = args[1].lite
    if((!isOWProjExists())||(opt_force)){
        if(!opt_lite){
            lib.fs.mkdir('assets')
            lib.fs.mkdir('styles')
            lib.fs.mkdir('pages')
        }
        lib.fs.mkdir('lib')
        if(!lib.fs.fileExists("app.js")){
            lib.fs.write('app.js',"")
        }
        oceanwave_cfg.name = proj_name
        lib.cfg.init(oceanwave_cfg)
        console.log("Done.")
    } else {
        console.error("\'oceanwave.json\' is already exists. Add option \'-f\' or \'--force\' to force exec.\nNothing to do.")
    }
}