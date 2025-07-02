Feature('Form Submission');

Scenario('Submit form with valid input',  ({ I }) => {
  I.amOnPage('/');
  let data = {
    name : 'Chandhru',
    email : 'gschandhru12@gmail.com',
    currentAddress : '11/378 A Vanni mara street Paramakudi',
    permanentAddress : '11/378 A Vanni mara street Paramakudi'
  }
  
   I.submitForm(data);
});

Scenario('Submit form with invalid email', async ({ I }) => {
  I.amOnPage('/');
  I.wait(2);
  await I.submitForm(
    "Chanadhru",
    "gschandu1ail.com", 
    "11/378 A Vanni mara street Paramakudi",
    "11/378 A Vanni mara street Paramakudi"
  );
});

Scenario('Submit form without name', async ({ I }) => {
  I.amOnPage('/');
  I.wait(2);
  await I.submitForm(
    "", 
    "gschandhru10@gmail.com",
    "11/378 A Vanni mara street Paramakudi",
    "11/378 A Vanni mara street Paramakudi"
  );
});

Scenario('Submit form with empty email field', async ({ I }) => {
  I.amOnPage('/');
  I.wait(2);
  await I.submitForm(
    "Chandhru",
    "", 
    "11/378 A Vanni mara street Paramakudi",
    "11/378 A Vanni mara street Paramakudi"
  );
});


Scenario('Submit form with short current address', async ({ I }) => {
  I.amOnPage('/');
  I.wait(2);
  await I.submitForm(
    "Chandhru",
    "chandhru10@gmail.com",
    "Short",
    "11/378 A Vanni mara street Paramakudi"
  );
});

Scenario('Submit form with spaces only in name', async ({ I }) => {
  I.amOnPage('/');
  I.wait(2);
  await I.submitForm(
    "   ", 
    "chandhru10@gmail.com",
    "11/378 A Vanni mara street Paramakudi",
    "11/378 A Vanni mara street Paramakudi"
  );
});



Scenario('Submit form with email missing domain', async ({ I }) => {
  I.amOnPage('/');
  I.wait(2);
  await I.submitForm(
    "Chandhru",
    "chandhru@",
    "11/378 A Vanni mara street Paramakudi",
    "11/378 A Vanni mara street Paramakudi"
  );
});
