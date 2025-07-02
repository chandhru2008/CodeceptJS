Feature('Table Form');

Scenario('Create User', ({ Table }) => {
    Table.goToWebTable();
    let userData = {
        firstName: "Chan",
        lastName: "dhru",
        email: "gschandhru12@gmail.com",
        age: '18',
        salary: '10000',
        department: "Testing(AT)"
    }
    Table.createUser(userData)
})


Scenario('Delete User', ({Table})=>{
    let email = 'cierra@example.com';
    Table.goToWebTable();
    Table.deleteUser(email);
    Table.wait(3);
})

Scenario('Edit User', ({ Table }) => {
    let user = {
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
    Table.goToWebTable()
    Table.verifyFormIsPrefilledWithUserData(user);
    Table.editUser(updatedUserData);
    Table.verifyUserAppearsInTable(updatedUserData);
})

Scenario('Fail to create user with invalid email', ({ Table }) => {
    Table.goToWebTable();
    let invalidUser = {
        firstName: "A",
        lastName: "B",
        email: "invalid_email",  
        age: '-5',               
        salary: '-1000',        
        department: ""
    }
    try {
        Table.createUser(invalidUser);
    } catch (err) {
        console.log('Validation correctly failed:', err.message);
    }
});