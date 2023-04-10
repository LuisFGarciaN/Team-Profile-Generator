const Intern = require('../Library/Inter');
const { expectToBe, expectStr, expectNum } = require('../Utility/expects');

const intern = new Intern('Sarah', 'Smith', 1, 'GT');

test('creates an intern object', () => {
    expectToBe(intern.firstName, 'Sarah');
    expectToBe(intern.lastName, 'Smith');
    expectNum(intern.id);
    expectStr(intern.email, '@');
    expectToBe(intern.role, 'Intern');
    expectToBe(intern.school, 'GT');
    expectToBe(intern.icon, 'fas fa-graduation-cap');
});

test('gets intern\'s name', () => {
    expectStr(intern.getName(), `${intern.firstName} ${intern.lastName}`);
});

test('gets intern\'s ID', () => {
    expectStr(intern.getId(), `${intern.id}`);
});

test('gets intern\'s email', () => {
    expectStr(intern.getEmail(), intern.email);
});

test('gets intern\'s role', () => {
    expectStr(intern.getRole(), intern.role);
});

test('gets intern\'s school', () => {
    expectStr(intern.getSchool(), intern.school);
});

test('gets intern\'s icon', () => {
    expectStr(intern.getIcon(), intern.icon);
});