"use strict";
function validateUsername(username) {
    if (typeof username === 'string') {
        return username.length > 5;
    }
    return false;
}
it('should return true for valid usernames', () => {
    expect(validateUsername('Matt1234')).toBe(true);
    expect(validateUsername('Alice')).toBe(false);
    expect(validateUsername('Bob')).toBe(false);
});
it('Should return false for null', () => {
    expect(validateUsername(null)).toBe(false);
});
