import _ from "lodash/object.js"
import { OWFileSystem } from "../filesystem/filesystem.js"

const _fs = new OWFileSystem()

export class OWCfg{
  constructor(cfg_file = "./oceanwave.json") {
    this.cfg_file = cfg_file
  }
  #read() {
    var cfg_obj = JSON.parse(_fs.read(this.cfg_file).content)
    return cfg_obj
  }
  #write(obj) {
    _fs.write(this.cfg_file, JSON.stringify(obj, null, '\t'))
  }
  init(obj) {
    this.#write(obj)
  }
  set(key, value) {
    var cfg_obj = this.#read()
    _.set(cfg_obj, key, value)
    this.#write(cfg_obj)
  }
  get(key) {
    var cfg_obj = this.#read()
    return _.get(cfg_obj,key)
  }
}