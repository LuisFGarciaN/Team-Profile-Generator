const Engineer = require('../Library/Engr');
const { expectToBe, expectStr, expectNum } = require('../Utility/expects');

const engineer = new Engineer('Sarah', 'Smith', 1, 'Sarahcodes');

test('creates an engineer object', () => {
    expectToBe(engineer.firstName, 'Sarah');
    expectToBe(engineer.lastName, 'Smith');
    expectNum(engineer.id);
    expectStr(engineer.email, '@');
    expectToBe(engineer.role, 'Engineer');
    expectToBe(engineer.icon, 'fas fa-glasses');
});

test('gets engineer\'s name', () => {
    expectStr(engineer.getName(), `${engineer.firstName} ${engineer.lastName}`);
});

test('gets engineer\'s ID', () => {
    expectStr(engineer.getId(), `${engineer.id}`);
});

test('gets engineer\'s email', () => {
    expectStr(engineer.getEmail(), engineer.email);
});

test('gets engineer\'s role', () => {
    expectStr(engineer.getRole(), engineer.role);
});

test('gets engineer\'s github', () => {
    expectStr(engineer.getGithub(), engineer.github);
});

test('gets engineer\'s icon', () => {
    expectStr(engineer.getIcon(), engineer.icon);
});