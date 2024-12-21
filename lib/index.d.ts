import { OWCfg } from "./config/config";
import { OWFileSystem } from "./filesystem/filesystem"
import { OWSubCmds } from "./subcmd/subcmd";

export class Lib{
  fs:OWFileSystem;
  cfg:OWCfg;
  cmd:OWSubCmds;
  constructor();
}

export const lib:Lib;