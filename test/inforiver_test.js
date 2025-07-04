const { openInforiver, verifyRowColor } = require("../pages/InforiverPage");

Feature('Changing background coloer')

Scenario('Change background', async ({ I }) => {
    I.amOnPage("/");
    const region = 'USA'
    await openInforiver(region);
    await verifyRowColor(region);
    I.wait(6)
})
