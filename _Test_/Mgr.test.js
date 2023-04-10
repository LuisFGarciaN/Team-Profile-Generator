const Manager = require ('../Library/Mgr');
const { expectToBe, expectStr, expectNum } = require('../Utility/expects');

const manager = new Manager('Sarah', 'Smith', 1, 1);

test('creates a manager object', () => {
    expectToBe(manager.firstName,'Sarah');
    expectToBe(manager.lastName, 'Smith');
    expectNum(manager.id);
    expectStr(manager.email, '@');
    expectToBe(manager.role, 'Manager');
    expectNum(manager.officeNumber);
    expectToBe(manager.icon, 'fas fa-mug-hot');
});

test('gets manager\'s name', () => {
    expectStr(manager.getName(), `${manager.firstName} ${manager.lastName}`);
});

test('gets manager\'s ID', () => {
    expectStr(manager.getId(), `${manager.id}`);
});

test('gets manager\'s email', () => {
    expectStr(manager.getEmail(), manager.email);
});

test('gets manager\'s role', () => {
    expectStr(manager.getRole(), manager.role);
});

test('gets manager\'s office number', () => {
    expectStr(manager.getOfficeNumber(), `${manager.officeNumber}`);
});

test('gets manager\'s icon', () => {
    expectStr(manager.getIcon(), manager.icon);
});