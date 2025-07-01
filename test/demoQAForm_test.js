Feature('Form Submission');

Scenario('Submit form', ({ I }) => {
    I.amOnPage('/');
    I.wait(2);
    I.submitForm("Chandhru G.S", "gschandhru10@gmail.com", "11/378 A Vanni mara street Paramakudi", "11/378 A Vanni mara street Paramakudi");
});



