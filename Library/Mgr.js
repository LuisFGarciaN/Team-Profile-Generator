const EE = require('./EE');

class Mgr extends EE {
    constructor(firstName, lastName, id, officeNumber) {
        super(firstName, lastName, id);
        
        this.officeNumber = officeNumber;
        this.role = 'Manager';
        this.icon = 'fas fa-mug-hot';
    };

    getOfficeNumber() {
        return `<span class="has-text-weight-bold">Office Number:</span> ${this.officeNumber}`;
    };
};

module.exports = Mgr;