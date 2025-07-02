Feature('Table Form');

// Scenario('Create User', ({ I }) => {
//     I.amOnPage('/');
//     I.click({ xpath: '(//div[@class = "category-cards"]//div)[1]' });
//     I.click({ xpath: '//span[text()= "Web Tables"]/..' });
//     I.click({ xpath: '//button[@id = "addNewRecordButton"]' });
//     I.see('Registration Form', '//div[text() = "Registration Form"]');
//     let userData = {
//         firstName: "Chan",
//         lastName: "dhru",
//         email: "gschandhru12@gmail.com",
//         age: '18',
//         salary: '10000',
//         department: "Testing(AT)"
//     }
//     I.createUser(userData)
// })

// Scenario('Delete User', ({ I }) => {
//     I.amOnPage('/');
//     I.click({ xpath: '(//div[@class = "category-cards"]//div)[1]' });
//     I.click({ xpath: '//span[text()= "Web Tables"]/..' });
//     let emailToDelete = "cierra@example.com"
//     I.click(`//div[text()= "${emailToDelete}"]/following-sibling ::div[last()]/div/span[@title = "Delete"]`);
//     I.wait(2);
// })

Scenario('Edit User', ({ I }) => {
    let userData = {
        firstName: "Kierra",
        lastName: "Gentry",
        email: "kierra@example.com",
        age: '29',
        salary: '2000',
        department: "Legal"
    }
    let updatedUserData = {
        firstName: "Chandhru",
        lastName: "G S",
        email: "gschan12@gmail.com",
        age: '18',
        salary: '20000',
        department: "Sales"
    }
    I.amOnPage('/');
    I.click({ xpath: '(//div[@class = "category-cards"]//div)[1]' });
    I.click({ xpath: '//span[text()= "Web Tables"]/..' });
    I.click(`//div[text()= "${userData.email}"]/following-sibling ::div[last()]/div/span[@title = "Edit"]`);
    I.see('Registration Form', '//div[text() = "Registration Form"]');
    I.seeInField('//input[@id="firstName"]', userData.firstName);
    I.seeInField('//input[@id="lastName"]', userData.lastName);
    I.seeInField('//input[@id="age"]', String(userData.age));
    I.seeInField('//input[@id="userEmail"]', userData.email);
    I.seeInField('//input[@id="salary"]', String(userData.salary));
    I.seeInField('//input[@id="department"]', userData.department);
    I.editUser(updatedUserData)
})