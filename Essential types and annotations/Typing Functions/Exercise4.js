"use strict";
// function types
const modifyUser = (users, id, makeChange) => {
    return users.map((u) => {
        if (u.id === id) {
            return makeChange(u);
        }
        return u;
    });
};
const users = [
    { id: "1", name: "John" },
    { id: "2", name: "Jane" },
];
modifyUser(users, "1", (user) => {
    return { ...user, name: "Waqas" };
});
modifyUser(users, "1", (user) => {
    return { ...user, name: '123' };
});
