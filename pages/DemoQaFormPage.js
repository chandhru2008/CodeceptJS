module.exports = {
    navigateToForm: {
        elements: '(//div[@class = "category-cards"]//div)[1]',
        textBox: '(//ul[@class="menu-list"])[1]//li[@id="item-0"]'
    },
    fields: {
        fullName: '//input[@id= "userName"]',
        email: '//input[@id = "userEmail"]',
        currentAddress: '//textarea[@id = "currentAddress"]',
        permanentAddress: '//textarea[@id = "permanentAddress"]',
        submit: '//button[@id = "submit"]'
    },
    outputFields: {
        name: '//p[@id="name"]',
        email: '//p[@id="email"]',
        currentAddress: '//p[@id="currentAddress"]',
        permanentAddress: '//p[@id="permanentAddress"]',
    }

}