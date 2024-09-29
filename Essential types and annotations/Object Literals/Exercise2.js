"use strict";
const concatName = (user) => {
    if (!user.last) {
        return user.first;
    }
    return `${user.first} ${user.last}`;
};
const result = concatName({
    first: 'John',
});
