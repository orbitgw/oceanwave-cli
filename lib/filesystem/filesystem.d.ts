export interface OWFSResult {
    code: string,
    content: string
}

export class OWFileSystem {
    constructor();
    read(path: string): OWFSResult;
    write(path: string, text:string): OWFSResult;
    append(path: string, text:string, ending:string): OWFSResult;
    mkdir(path: string): OWFSResult;
    readDir(path: string): Array;
    dirExists(path: string): boolean;
    fileExists(path: string): boolean;
    walk(path: string): Array;
}
