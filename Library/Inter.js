const EE = require('./EE');

class Inter extends EE {
    constructor(firstName, lastName, id, school) {
        super(firstName, lastName, id);

        this.school = school;
        this.role = 'Intern';
        this.icon = 'fas fa-graduation-cap';
    };

    getSchool() {
        return `<span class="has-text-weight-bold">School:</span> ${this.school}`;
    };
};

module.exports = Inter;