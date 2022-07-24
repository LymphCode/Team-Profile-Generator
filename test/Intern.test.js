const Intern = require("../lib/Intern");

describe('Intern', () => {
    test('Can set school', () => {
        const user = new Intern('Name', 1, 'test@test.com', 'school'); // ('Name', id, 'email', school);
        expect(user.school).toBe('school');
        expect(user.getRole()).toBe('Intern');
    });
});