export class OWBaseException extends Error {
  constructor (msg) {
      super(msg)
      this.name = 'OWBaseException',
      Error.captureStackTrace(this, this.constructor)
  }
}

export class OWTypeError extends OWBaseException{
  constructor(msg){
    super(msg)
    this.name = "OWTypeError"
  }
}