// functions returning void

const addClickEventListener = (listener: (event: MouseEvent) => void) => {
    document.addEventListener("click", listener);
};

addClickEventListener(() => {
    console.log("Clicked!");
});
// duplicate function
// addClickEventListener(.0
//     "abc",
// );