"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUsername(username) {
    if (username !== null) {
        return `User: ${username}`;
    }
    else {
        return 'Guest';
    }
}
const result = getUsername('Alice');
const result2 = getUsername(null);
