module.exports = {
  validateTextField(label, value, minLength = 1) {
    if (!value || value.trim().length < minLength) {
      throw new Error(`${label} must be at least ${minLength} characters.`);
    }
  },

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format.');
    }
  },

  validatePositiveNumber(label, value) {
    if (isNaN(value) || Number(value) <= 0) {
      throw new Error(`${label} must be a positive number.`);
    }
  },

  validateNonNegativeNumber(label, value) {
    if (isNaN(value) || Number(value) < 0) {
      throw new Error(`${label} must be a non-negative number.`);
    }
  },
};
