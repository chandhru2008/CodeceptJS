Feature('Form Submission');

Scenario('Submit form with valid input', ({ I }) => {
  let user = {
    name: 'Chandhru',
    email: 'gschandhru12@gmail.com',
    currentAddress: '11/378 A Vanni mara street Paramakudi',
    permanentAddress: '11/378 A Vanni mara street Paramakudi'
  }
  I.goToForm();
  I.submitForm(user);
  I.verifySubmittedData(user)
});


Scenario('Submit form with email missing domain', async ({ I }) => {
  I.goToForm();
    let user = {
    name: 'Chandhru',
    email: 'gschandhru12@',
    currentAddress: '11/378 A Vanni mara street Paramakudi',
    permanentAddress: '11/378 A Vanni mara street Paramakudi'
  }
  I.submitForm(user);
  I.verifySubmittedData(user);
});
