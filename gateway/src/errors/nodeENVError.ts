export default class NodeENVError extends Error {
  constructor(message: string) {
    super();
    this.name = 'NodeENVError';
    this.message = message;
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, NodeENVError.prototype);
  }
}
