// optional functional parameters

const concatNames = ({ first, last}: {first: string, last?: string}) => {
    if (!last) {
        return first;
    }

    return `${first} ${last}`;
};
const result1 = concatNames({first:"John", last:"Doe"});
const result2 = concatNames({first:"John"});
