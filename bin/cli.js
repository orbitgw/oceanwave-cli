#!/usr/bin/env node
import {Argument, program} from "commander";
import {lib} from "../lib/index.js";
import { preload_subcmds } from "../cmds/index.js";

preload_subcmds()

program
  .name('ow')
  .description('OCEANWAVE Project Manager CommandLine Interface\nCopyright (C) 2024 orbitgw')
  .version('0.0.1 Dev');

program.command('init')
  .description('initialize the OCEANWAVE Project')
  .argument("<proj_name>","Project Name")
  .option("-f, --force","Forcibly overwrite the original cfg")
  .option("-l, --lite","Only generate the cfg file")
  .action((proj_name,options) => {
    lib.cmd.exec("init",proj_name,options)
  });

/* test cmd for development
program.command('test')
  .action(() => {
  });
  */

program.parse();
