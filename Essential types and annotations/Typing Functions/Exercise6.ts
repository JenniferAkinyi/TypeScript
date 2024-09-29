const acceptsCallback = (callback: () => string) => {
    callback();
};
const returnString = () => {
    return "Hello!";
};

acceptsCallback(returnString);
