const { I } = inject();

const WebTablePage = {
    locator: {
        elementsCard: '(//div[@class="category-cards"]//div)[1]',
        webTableList: '(//ul[@class="menu-list"])[1]/li[@id="item-3"]',
        addUserButton: '//button[@id="addNewRecordButton"]'
    },

    tableColumns: {
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
        getActionButton: (action, email) =>
            `//div[text()="${email}"]/following-sibling::div[last()]/div/span[@title="${action}"]`
    },


    async goToWebtable() {
        await I.amOnPage('/')
        await I.click(WebTablePage.locator.elementsCard);
        await I.click(WebTablePage.locator.webTableList);
    },

    //Clicking the action buttons
    async openUserForm() {
        await I.click(WebTablePage.locator.addUserButton);
    },

    async deleteUser(email) {
        await I.click(WebTablePage.tableColumns.getActionButton('Delete', email))
    },

    async editUserForm(email) {
        await I.click(WebTablePage.tableColumns.getActionButton('Edit', email));
    },

    async verifyUserAppearsInTable(user) {
        await I.see(user.email, WebTablePage.tableColumns.getEmailCell(user.email));
        await I.see(user.firstName, WebTablePage.tableColumns.getFirstName(user.email, user.firstName));
        await I.see(user.lastName, WebTablePage.tableColumns.getLastName(user.email, user.lastName));
        await I.see(user.age, WebTablePage.tableColumns.getAge(user.email, user.age));
        await I.see(user.salary, WebTablePage.tableColumns.getSalary(user.email, user.salary));
        await I.see(user.department, WebTablePage.tableColumns.getDepartment(user.email, user.department));
    },
};

module.exports = WebTablePage;
