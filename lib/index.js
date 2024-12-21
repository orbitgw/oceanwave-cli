import { OWCfg } from "./config/config.js"
import { OWFileSystem } from "./filesystem/filesystem.js"
import { OWSubCmds } from "./subcmd/subcmd.js"

export class Lib{
  constructor(){
    this.fs = new OWFileSystem()
    this.cfg = new OWCfg()
    this.cmd = new OWSubCmds()
  }
}

export const lib = new Lib()