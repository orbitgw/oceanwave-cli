import { lib } from "../lib/index.js";
import { OWCreateSubCmd } from "../lib/subcmd/subcmd.js";

import { cmd_init } from "./init.js";

export function preload_subcmds(){
  var cmd_init_obj = new OWCreateSubCmd('init')
  cmd_init_obj.setCallback(cmd_init)

  lib.cmd.register(cmd_init_obj)
}

