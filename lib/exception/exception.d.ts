export class OWBaseException extends Error {
  constructor (msg: string);
}

export class OWTypeError extends OWBaseException {
  constructor (msg: string);
}
