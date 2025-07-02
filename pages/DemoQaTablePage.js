const { fields } = require("./DemoQaFormPage");


module.exports = {
    webTable: '(//ul[@class = "menu-list"])[1]/li[@id = "item-3"]',
    addNewRecordButton: '//button[@id = "addNewRecordButton"]',
    registrationFormHeading: '//div[text() = "Registration Form"]',
    registrationFormFields: {
        firstName: '//input[@id="firstName"]',
        lastName: '//input[@id="lastName"]',
        email: '//input[@id="userEmail"]',
        age: '//input[@id="age"]',
        salary: '//input[@id="salary"]',
        department: '//input[@id="department"]',
        submit: '//button[@id="submit"]'
    },

    getEmailCell: (email) => `//div[text()="${email}"]`,

    getFirstName: (email, firstName) =>
        `//div[text()="${email}"]/preceding-sibling::div[text()="${firstName}"]`,

    getLastName: (email, lastName) =>
        `//div[text()="${email}"]/preceding-sibling::div[text()="${lastName}"]`,

    getAge: (email, age) =>
        `//div[text()="${email}"]/preceding-sibling::div[text()="${age}"]`,

    getSalary: (email, salary) =>
        `//div[text()="${email}"]/following-sibling::div[text()="${salary}"]`,

    getDepartment: (email, department) =>
        `//div[text()="${email}"]/following-sibling::div[text()="${department}"]`,

    getActionButton: (action, email) =>`//div[text()= "${email}"]/following-sibling ::div[last()]/div/span[@title = "${action}"]`
}