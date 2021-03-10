// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Engineer has name, id, email, github then uses functions getName(), getId(), getEmail(), getGithub(), getRole() (overridden to engineer)
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;