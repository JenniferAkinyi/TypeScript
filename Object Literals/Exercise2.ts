const concatName = (user: { first: string; last?: string }) => {
    if (!user.last) {
        return user.first;
    }

    return `${user.first} ${user.last}`;
};
const result = concatName({
    first: 'John',
});