const { I } = inject();
const {
  validateTextField,
  validateEmail
} = require('../utils/validationUtils');
const { fields, outputFields, navigateToForm } = require('../pages/DemoQaFormPage');

module.exports = function () {
  return actor({
    goToForm() {
      I.amOnPage('/');
      I.click(navigateToForm.elements);
      I.click(navigateToForm.textBox);
    },

    submitForm(user) {
      I.fillField(fields.fullName, user.name);
      I.fillField(fields.email, user.email);
      I.fillField(fields.currentAddress, user.currentAddress);
      I.fillField(fields.permanentAddress, user.permanentAddress);

      validateTextField('Name', user.name, 3);
      validateEmail(user.email);
      validateTextField('Current Address', user.currentAddress, 10);
      validateTextField('Permanent Address', user.permanentAddress, 10);

      I.click(fields.submit);
      I.waitForElement(outputFields.name, 3);
    },

    verifySubmittedData(user) {
      I.see(`Name:${user.name}`, outputFields.name);
      I.see(`Email:${user.email}`, outputFields.email);
      I.see(`Current Address :${user.currentAddress}`, outputFields.currentAddress);
      I.see(`Permananet Address :${user.permanentAddress}`, outputFields.permanentAddress);
    }
  });
};
