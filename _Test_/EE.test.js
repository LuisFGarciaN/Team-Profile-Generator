const Employee = require ('../Library/EE');
const { expectToBe, expectStr, expectNum } = require('../Utility/expects');

const employee = new Employee('Sarah', 'Smith', 1);

test('creates a employee object', () => {
    expectToBe(employee.firstName,'Sarah');
    expectToBe(employee.lastName, 'Smith');
    expectNum(employee.id);
    expectStr(employee.email, '@');
    expectToBe(employee.role, 'Employee');
    expectToBe(employee.icon, 'fas fa-briefcase');
});

test('gets employee\'s name', () => {
    expectStr(employee.getName(), `${employee.firstName} ${employee.lastName}`);
});

test('gets employee\'s ID', () => {
    expectStr(employee.getId(), `${employee.id}`);
});

test('gets employee\'s email', () => {
    expectStr(employee.getEmail(), employee.email);
});

test('gets employee\'s role', () => {
    expectStr(employee.getRole(), employee.role);
});

test('gets employee\'s icon', () => {
    expectStr(employee.getIcon(), employee.icon);
});