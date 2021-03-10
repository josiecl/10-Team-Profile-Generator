// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Manager has name, id, email, office number, then uses functions getName(), getId(), getEmail(), getOfficeNumber()?, getRole() (overridden to manager)
const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;