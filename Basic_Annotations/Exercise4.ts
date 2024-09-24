// import { Expect } from "@total-typescript/helpers";

const handleFormData = (e: any) => {
    e.preventDefault();

    const data = new FormData(e.terget);

    const value = Object.fromEntries(data.entries());

    return value;
};
it("Should handle a form submit", () => {
    const form = document.createElement("form");

    form.innerHTML = `
  <input name="name" value="John Doe"></Exercise>
  `;

    form.onsubmit = (e) => {
        const value = handleFormData(e);

        expect(value).toEqual({ name: "John Doe" });
    };

    form.requestSubmit();

    expect.assertions(1);
});