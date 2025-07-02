const { I } = inject();
const {
  validateTextField,
  validateEmail,
  validatePositiveNumber,
  validateNonNegativeNumber,
  
} = require('../utils/validationUtils');


const {assertFieldRelativeToEmail} = require('../utils/validationUtils')

module.exports = function () {
  return actor({

    submitForm(data) {

      I.click({ xpath: '(//div[@class = "category-cards"]//div)[1]' });
      I.click({ xpath: '(//ul[@class="menu-list"])[1]//li[@id="item-0"]' });
      I.fillField('//input[@id="userName"]', data.name);
      I.fillField('//input[@id="userEmail"]', data.email);
      I.fillField('//textarea[@id="currentAddress"]', data.currentAddress);
      I.fillField('//textarea[@id="permanentAddress"]', data.permanentAddress);

      validateTextField('Name', data.name, 3);
      validateEmail(data.email);
      validateTextField('Current Address', data.currentAddress, 10);
      validateTextField('Permanent Address', data.permanentAddress, 10);


      I.click('//button[@id="submit"]');
      I.waitForElement('//p[@id="name"]', 5);


      I.see(`Name:${data.name}`, '//p[@id="name"]');
      I.see(`Email:${data.email}`, '//p[@id="email"]');
      I.see(`Current Address :${data.currentAddress}`, '//p[@id="currentAddress"]');
      I.see(`Permananet Address :${data.permanentAddress}`, '//p[@id="permanentAddress"]');

      I.wait(2);
    },

    createUser(userData) {

      I.fillField('//input[@id="firstName"]', String(userData.firstName));
      I.fillField('//input[@id="lastName"]', String(userData.lastName));
      I.fillField('//input[@id="userEmail"]', String(userData.email));
      I.fillField('//input[@id="age"]', String(userData.age));
      I.fillField('//input[@id="salary"]', String(userData.salary));
      I.fillField('//input[@id="department"]', String(userData.department));

      validateTextField('First Name', userData.firstName, 2);
      validateTextField('Last Name', userData.lastName, 2);
      validateEmail(userData.email);
      validatePositiveNumber('Age', userData.age);
      validateNonNegativeNumber('Salary', userData.salary);
      validateTextField('Department', userData.department, 1);


      I.click('//button[@id="submit"]');
      I.waitForElement(`//div[text()="${userData.email}"]`, 4);


      I.see(userData.email, `//div[text()="${userData.email}"]`);
      assertFieldRelativeToEmail(userData.email, 'preceding', userData.firstName);
      assertFieldRelativeToEmail(userData.email, 'preceding', userData.lastName);
      assertFieldRelativeToEmail(userData.email, 'preceding', userData.age);
      assertFieldRelativeToEmail(userData.email, 'following', userData.salary);
      assertFieldRelativeToEmail(userData.email, 'following', userData.department);

      I.wait(3);

    },

    editUser(updatedUserData) {
      I.fillField('//input[@id="firstName"]', String(updatedUserData.firstName));
      I.fillField('//input[@id="lastName"]', String(updatedUserData.lastName));
      I.fillField('//input[@id="userEmail"]', String(updatedUserData.email));
      I.fillField('//input[@id="age"]', String(updatedUserData.age));
      I.fillField('//input[@id="salary"]', String(updatedUserData.salary));
      I.fillField('//input[@id="department"]', String(updatedUserData.department));

      validateTextField('First Name', updatedUserData.firstName, 2);
      validateTextField('Last Name', updatedUserData.lastName, 2);
      validateEmail(updatedUserData.email);
      validatePositiveNumber('Age', updatedUserData.age);
      validateNonNegativeNumber('Salary', updatedUserData.salary);
      validateTextField('Department', updatedUserData.department, 1);

      I.click('//button[@id="submit"]');
      I.waitForElement(`//div[text()="${updatedUserData.email}"]`, 4);


      I.see(updatedUserData.email, `//div[text()="${updatedUserData.email}"]`);
      assertFieldRelativeToEmail(updatedUserData.email, 'preceding', updatedUserData.firstName);
      assertFieldRelativeToEmail(updatedUserData.email, 'preceding', updatedUserData.lastName);
      assertFieldRelativeToEmail(updatedUserData.email, 'preceding', updatedUserData.age);
      assertFieldRelativeToEmail(updatedUserData.email, 'following', updatedUserData.salary);
      assertFieldRelativeToEmail(updatedUserData.email, 'following', updatedUserData.department);

      I.wait(3);
    }


  });
};
