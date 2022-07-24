const Employee = require('../lib/Employee');

describe('Employee', () => {
    test('Should create new Employee constant', () => {
        const user = new Employee('Name', 1, 'test@test.com'); //('Name', id, 'email')
        expect(user.name).toBe('Name');
        expect(user.id).toBe(1);
        expect(user.email).toBe('test@test.com');
        expect(user.getName()).toBe('Name');
        expect(user.getId()).toBe(1);
        expect(user.getEmail()).toBe('test@test.com');
        expect(user.getRole()).toBe('Employee');
    })
})