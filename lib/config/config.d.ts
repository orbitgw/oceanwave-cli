export class OWCfg{
  private #read():object;
  private #write(obj:object):void;
  constructor(cfg_file:string);
  init(obj:object):void
  set(key:string, value:any):void
  get(key:string):any
}