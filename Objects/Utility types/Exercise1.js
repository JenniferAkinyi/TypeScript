"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchUser = async () => {
    const response = await fetch("/api/user");
    const user = await response.json();
    return user;
};
const example = async () => {
    const user = await fetchUser();
};
