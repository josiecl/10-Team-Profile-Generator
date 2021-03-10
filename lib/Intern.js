// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Intern has name, id, email, school, then uses functions getName(), getId(), getEmail(), getSchool(), getRole() (overridden to intern)
const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }

}

module.exports = Intern;