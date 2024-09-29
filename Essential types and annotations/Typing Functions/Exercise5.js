"use strict";
// functions returning void
const addClickEventListener = (listener) => {
    document.addEventListener("click", listener);
};
addClickEventListener(() => {
    console.log("Clicked!");
});
// duplicate function
// addClickEventListener(.0
//     "abc",
// );
