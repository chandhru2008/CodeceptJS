const assert = require('assert');

module.exports = {
  validateUserData(user) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    assert.ok(user.firstName.length > 3, ` First name should be more than 3 characters, got "${user.firstName}"`);
    assert.ok(user.lastName.length > 3, ` Last name should be more than 3 characters, got "${user.lastName}"`);

    const age = Number(user.age);
    assert.ok(!isNaN(age) && age >= 0, ` Age should be a non-negative number, got "${user.age}"`);

    const salary = Number(user.salary);
    assert.ok(!isNaN(salary) && salary >= 0, ` Salary should be a non-negative number, got "${user.salary}"`);

    assert.ok(emailRegex.test(user.email), `Invalid email format: "${user.email}"`);

    assert.ok(user.department && user.department.length > 1, ` Department should not be empty`);
  }
};

