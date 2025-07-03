const { registerUser, editUser, verifyFormIsPrefilledWithUserData } = require("../pages/RegistrationPage");
const { goToWebtable, openUserForm, deleteUser, verifyUserAppearsInTable, editUserForm } = require("../pages/WebTablesPage");

Feature('Web table operations');

Scenario('Register User', async () => {
    let user = {
        firstName: "Chan",
        lastName: "dhru",
        email: "gschangmail.com",
        age: '18',
        salary: '10000',
        department: "Testing(AT)"
    }
    await goToWebtable();
    await openUserForm();
    await registerUser(user);
    await verifyUserAppearsInTable(user);
});

Scenario('Delete User', async () => {
    await goToWebtable();
    let email = "kierra@example.com"
    await deleteUser(email);
});

Scenario('Edit User', async () => {
    let user = {
        firstName: "Kierra",
        lastName: "Gentry",
        email: "kierra@example.com",
        age: '29',
        salary: '2000',
        department: "Legal"
    }
    let updatedUser = {
        firstName: "Chan",
        lastName: "dhru",
        email: "gschandhru12@gmail.com",
        age: '18',
        salary: '10000',
        department: "Testing(AT)"
    }

    await goToWebtable();
    await editUserForm(user.email);
    await verifyFormIsPrefilledWithUserData(user);
    await editUser(updatedUser);
    await verifyUserAppearsInTable(updatedUser);
})