"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NodeENVError extends Error {
    constructor(message) {
        super();
        this.name = 'NodeENVError';
        this.message = message;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, NodeENVError.prototype);
    }
}
exports.default = NodeENVError;
//# sourceMappingURL=nodeENVError.js.map