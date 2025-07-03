const { I } = inject()
const { validateUserData } = require('../utils/validationUtils')
const RegistrationFormPage = {

    locator: {
        registrationFormHeading: '//div[@id = "registration-form-modal"]'
    },

    registrationFormFields: {
        firstName: '//input[@id="firstName"]',
        lastName: '//input[@id="lastName"]',
        email: '//input[@id="userEmail"]',
        age: '//input[@id="age"]',
        salary: '//input[@id="salary"]',
        department: '//input[@id="department"]',
        submit: '//button[@id="submit"]'
    },

    async registerUser(user) {
        await I.see('Registration Form', RegistrationFormPage.locator.registrationFormHeading);
        await RegistrationFormPage.fillAndValidateUserForm(user);
        await I.click(RegistrationFormPage.registrationFormFields.submit);
    },

    async editUser(updatedUser) {
        await RegistrationFormPage.fillAndValidateUserForm(updatedUser);
        await I.click(RegistrationFormPage.registrationFormFields.submit);
    },

    async fillAndValidateUserForm(user) {
        await I.fillField(RegistrationFormPage.registrationFormFields.firstName, user.firstName);
        await I.fillField(RegistrationFormPage.registrationFormFields.lastName, user.lastName);
        await I.fillField(RegistrationFormPage.registrationFormFields.email, user.email);
        await I.fillField(RegistrationFormPage.registrationFormFields.age, user.age);
        await I.fillField(RegistrationFormPage.registrationFormFields.salary, user.salary);
        await I.fillField(RegistrationFormPage.registrationFormFields.department, user.department)
        validateUserData(user);
    },

    async verifyFormIsPrefilledWithUserData(user) {
        I.seeInField(RegistrationFormPage.registrationFormFields.firstName, user.firstName);
        I.seeInField(RegistrationFormPage.registrationFormFields.lastName, user.lastName);
        I.seeInField(RegistrationFormPage.registrationFormFields.email, user.email);
        I.seeInField(RegistrationFormPage.registrationFormFields.age, String(user.age));
        I.seeInField(RegistrationFormPage.registrationFormFields.salary, String(user.salary));
        I.seeInField(RegistrationFormPage.registrationFormFields.department, user.department);
    },

}

module.exports = RegistrationFormPage;