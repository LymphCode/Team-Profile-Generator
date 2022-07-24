const Manager = require("../lib/Manager");

describe('Manager', () => {
    test('Can set office number', () => {
        const user = new Manager('Name', 1, 'test@test.com', 1); // ('Name', id, 'email', office number);
        expect(user.officeNumber).toBe(1);
        expect(user.getRole()).toBe('Manager');
    });
});