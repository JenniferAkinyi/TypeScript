// function types

type UserWithId = {
    id: string;
    name: string;
};

const modifyUser = (users: UserWithId[], id: string, makeChange: (user: UserWithId) => UserWithId) => {
    return users.map((u) => {
        if (u.id === id) {
            return makeChange(u);
        }

        return u;
    });
};
const users: UserWithId[] = [
    { id: "1", name: "John" },
    { id: "2", name: "Jane" },
];

modifyUser(users, "1", (user) =>  {
    return { ...user, name: "Waqas" };
});
modifyUser(
    users,
    "1",
    (user) => {
        return { ...user, name: '123' };
    },
);