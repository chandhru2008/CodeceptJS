module.exports =  {
    assertFieldRelativeToEmail(email, direction, expectedValue) {
        const xpath = `//div[text()="${email}"]/${direction}-sibling::div[text()="${expectedValue}"]`;
        I.see(String(expectedValue), xpath);
    }
}
  