// steps_file.js
module.exports = function () {
  return actor({
    submitForm(name, email, currentAddress, permanentAddress) {
      this.click({ xpath: '//div[contains(@class , "top-card")][1]' });
      this.wait(2)
      this.click({ xpath: '(//ul[@class = "menu-list"])[1]//li[@id = "item-0"]' });
      this.wait(2);
      this.click({ xpath: '//input[@id= "userName"]' });
      this.appendField('//input[@id= "userName"]', name);
      this.click({ xpath: '//input[@id= "userEmail"]' })
      this.appendField('//input[@id= "userEmail"]', email);
      this.click({ xpath: '//textarea[@id= "currentAddress"]' });
      this.appendField('//textarea[@id= "currentAddress"]', currentAddress)
      this.click({ xpath: '//textarea[@id= "permanentAddress"]' })
      this.appendField('//textarea[@id= "permanentAddress"]', permanentAddress)
      this.click({ xpath: '//button[@id= "submit"]' })
      this.wait(5)
    }
  });
};
