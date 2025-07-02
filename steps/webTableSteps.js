const { I } = inject();
const {
    validateTextField,
    validateEmail,
    validatePositiveNumber,
    validateNonNegativeNumber
} = require('../utils/validationUtils');

const {  navigateToForm } = require('../pages/DemoQaFormPage');


const {
    registrationFormFields,
    webTable,
    addNewRecordButton,
    registrationFormHeading,
    getEmailCell,
    getFirstName,
    getLastName,
    getAge,
    getSalary,
    getDepartment,
    getActionButton
} = require('../pages/DemoQaTablePage');

module.exports = function () {
    return actor({

        goToWebTable() {
            I.amOnPage('/');
            I.click(navigateToForm.elements);
            I.click(webTable); // Assuming you're already on the Elements page
        },

        fillAndValidateUserForm(user) {
            I.fillField(registrationFormFields.firstName, String(user.firstName));
            I.fillField(registrationFormFields.lastName, String(user.lastName));
            I.fillField(registrationFormFields.email, String(user.email));
            I.fillField(registrationFormFields.age, String(user.age));
            I.fillField(registrationFormFields.salary, String(user.salary));
            I.fillField(registrationFormFields.department, String(user.department));

            validateTextField('First Name', user.firstName, 2);
            validateTextField('Last Name', user.lastName, 2);
            validateEmail(user.email);
            validatePositiveNumber('Age', user.age);
            validateNonNegativeNumber('Salary', user.salary);
            validateTextField('Department', user.department, 1);
        },

        createUser(userData) {
            I.click(addNewRecordButton);
            I.see('Registration Form', registrationFormHeading);
            this.fillAndValidateUserForm(userData);
            I.click('#submit');
            I.waitForElement(`//div[text()="${userData.email}"]`, 4);
        },

        editUser(updatedUserData) {
            this.fillAndValidateUserForm(updatedUserData);
            I.click('#submit');
            I.waitForElement(`//div[text()="${updatedUserData.email}"]`, 4);
        },

        verifyUserAppearsInTable(user) {
            I.see(user.email, getEmailCell(user.email));
            I.see(user.firstName, getFirstName(user.email, user.firstName));
            I.see(user.lastName, getLastName(user.email, user.lastName));
            I.see(user.age, getAge(user.email, user.age));
            I.see(user.salary, getSalary(user.email, user.salary));
            I.see(user.department, getDepartment(user.email, user.department));
        },

        deleteUser(email) {
            I.click(getActionButton("Delete", email));
        },

        verifyFormIsPrefilledWithUserData(user) {
            I.click(getActionButton("Edit", user.email));
            I.seeInField(registrationFormFields.firstName, user.firstName);
            I.seeInField(registrationFormFields.lastName, user.lastName);
            I.seeInField(registrationFormFields.email, user.email);
            I.seeInField(registrationFormFields.age, String(user.age));
            I.seeInField(registrationFormFields.salary, String(user.salary));
            I.seeInField(registrationFormFields.department, user.department);
        }

    });
};
