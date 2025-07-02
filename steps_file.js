const { I } = inject();

module.exports = function () {
  return actor({
    async submitForm(name, email, currentAddress, permanentAddress) {
      I.click({ css: '.card:first-child' });
      I.wait(2);

      I.click({ xpath: '(//ul[@class="menu-list"])[1]//li[@id="item-0"]' });
      I.wait(2);

      I.fillField({ xpath: '//input[@id="userName"]' }, name);
      I.fillField({ xpath: '//input[@id="userEmail"]' }, email);
      I.fillField({ xpath: '//textarea[@id="currentAddress"]' }, currentAddress);
      I.fillField({ xpath: '//textarea[@id="permanentAddress"]' }, permanentAddress);

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      const enteredName = await I.grabValueFrom({ xpath: '//input[@id="userName"]' });
      const enteredEmail = await I.grabValueFrom({ xpath: '//input[@id="userEmail"]' });
      const enteredCurrentAddress = await I.grabValueFrom({ xpath: '//textarea[@id="currentAddress"]' });
      const enteredPermanentAddress = await I.grabValueFrom({ xpath: '//textarea[@id="permanentAddress"]' });

      if (!enteredName || enteredName.trim().length < 3) {
        throw new Error('Name must be at least 3 characters long.');
      }

      if (!emailRegex.test(enteredEmail)) {
        throw new Error('Invalid email format.');
      }

      if (!enteredCurrentAddress || enteredCurrentAddress.trim().length < 10) {
        throw new Error('Current address must be at least 10 characters.');
      }

      if (!enteredPermanentAddress || enteredPermanentAddress.trim().length < 10) {
        throw new Error('Permanent address must be at least 10 characters.');
      }

      I.click({ xpath: '//button[@id="submit"]' });
      I.waitForElement('//p[@id="name"]', 5);

      I.see(enteredName, '//p[@id="name"]');
      I.see(enteredEmail, '//p[@id="email"]');
      I.see(enteredCurrentAddress, '//p[@id="currentAddress"]');
      I.see(enteredPermanentAddress, '//p[@id="permanentAddress"]');

      I.wait(5);
    }
  });
};
