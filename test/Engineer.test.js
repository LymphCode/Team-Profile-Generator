const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    test('Can set gitHub', () => {
        const user = new Engineer('Name', 1, 'test@test.com', 'github.com/test'); // ('Name', id, 'email', gitHub);
        expect(user.gitHub).toBe('github.com/test');
        expect(user.getRole()).toBe('Engineer');
    });
});