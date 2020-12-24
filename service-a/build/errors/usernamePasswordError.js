"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsernamePasswordError extends Error {
    constructor() {
        super();
        this.name = 'UsernamePasswordError';
        this.message = 'Username/Password is invalid';
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, UsernamePasswordError.prototype);
    }
}
exports.default = UsernamePasswordError;
//# sourceMappingURL=usernamePasswordError.js.map