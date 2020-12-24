"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JWTSignError extends Error {
    constructor() {
        super();
        this.name = 'JWTSignError';
        this.message = 'An error occurred while signing the new JWT';
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, JWTSignError.prototype);
    }
}
exports.default = JWTSignError;
//# sourceMappingURL=jwtError.js.map