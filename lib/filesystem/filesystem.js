import * as nodefs from "node:fs"

export class OWFileSystem{
    constructor(){}
    read(path){
        var code,content
        try {
            content = nodefs.readFileSync(path,'utf8')
            code = "OW_FS_SUCCEEDED"
        } catch(err){
            content = err
            code = "OW_FS_FAILED"
        }
        return {code,content}
    }
    write(path,text){
        var code,content
        content = null
        try{
            nodefs.writeFileSync(path,text,'utf8')
            code = "OW_FS_SUCCEEDED"
        }
        catch(err){
            content = err
            code = "OW_FS_FAILED"
        }
        return {code,content}
    }
    append(path,text,ending=''){
        var code,content
        content = null
        try{
            nodefs.appendFileSync(path,text+ending,'utf8')
            code = "OW_FS_SUCCEEDED"
        }
        catch(err){
            content = err
            code = "OW_FS_FAILED"
        }
        return {code,content}
    }
    mkdir(path){
        var code,content
        content = null
        try{
            var dirs = path.split('/')
            var present_dir = '.' 
            for(var i in dirs){
                present_dir = present_dir + '/' + dirs[i]
                var dir_exists = this.dirExists(present_dir)
                if(!dir_exists){
                    nodefs.mkdirSync(present_dir)
                }
                
            }
            code = "OW_FS_SUCCEEDED"
        }
        catch(err){
            content = err
            code = "OW_FS_FAILED"
        }
        return {code,content}
    }
    readDir(path){
        return nodefs.readdirSync(path)
    }
    dirExists(path){
        return nodefs.existsSync(path)
    }
    fileExists(path){
        try{
            nodefs.accessSync(path,nodefs.F_OK)
        }catch(err){
            return false
        }
        return true
    }
    walk(path){
        let res=[]
        function traverse(dir){
            nodefs.readdirSync(dir).forEach((file)=>{
                const pathname=dir+'/'+file
                if(nodefs.statSync(pathname).isDirectory()){
                    traverse(pathname)
                }else{
                    res.push(pathname)
                }
            })
        }
        traverse(path)
        return res;
    }
}
