# 🚀 UI Test Automation Framework - CodeceptJS + Playwright + Allure

This is a practice project for learning end-to-end test automation using CodeceptJS with Playwright as the helper and Allure for HTML reporting.

It follows a clean structure using:
- Page Object Model (`/pages`)
- Custom reusable steps (`/steps`)
- Utility functions (`/utils`)
- Allure reports (`/allure-results`, `/allure-report`)

---

## 📁 Folder Structure

```
project-root/
├── tests/                 # Test files (scenarios)
├── pages/                 # Page Object Model files
├── steps/                 # Custom steps (actor extensions)
├── utils/                 # Validation & reusable functions
├── output/                # CodeceptJS output (logs, screenshots)
├── allure-results/        # Raw Allure results (generated after run)
├── allure-report/         # Final HTML report (after generation)
├── codecept.conf.js       # CodeceptJS configuration
└── package.json
```

---

## ✅ Prerequisites

Ensure the following are installed on your system:

| Tool             | Version  |
|------------------|----------|
| Node.js          | >= 16.x  |
| npm              | >= 8.x   |
| Java (JDK)       | >= 8     |

> Java is required for Allure CLI to work properly.

---

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/chandhru2008/CodeceptJS
cd CodeceptJS
```

### 2. Install project dependencies

```bash
npm install
```

### 3. Install Allure CLI globally

```bash
npm install -g allure-commandline --save-dev
```

Or manually install from [Allure official site](https://docs.qameta.io/allure/#_installing_a_commandline).

---

## ⚙️ Configure Allure Plugin

Ensure this is added in your `codecept.conf.js`:

```js
plugins: {
  allure: {
    enabled: true,
    outputDir: "allure-results",
  }
}
```

---

## 🚀 Running Tests

### Run all tests in headless mode:
```bash
npx codeceptjs run --plugins allure
```

### Run tests with step output:
```bash
npx codeceptjs run --steps
```

### Run a specific test file:
```bash
npx codeceptjs run tests/user_test.js
```

### Run in debug (headed) mode:
```bash
npx codeceptjs run --debug
```

---

## 📊 Allure Report Commands

### 🧪 1. Run tests to generate raw results
```bash
npx codeceptjs run --plugins allure
```

This will generate raw files in the `allure-results/` folder.

---

### 📁 2. Check if folder exists

Ensure the `allure-results/` folder is created and contains `.json` files. If it's empty, no report will be generated.

---

### 🛠️ 3. Generate the HTML report

```bash
allure generate --clean --single-file allure-results
```

> This creates the final HTML report inside `allure-report/`.

---

### 🌐 4. Open the HTML report in browser

```bash
allure open allure-report
```

OR (temporary preview mode):
```bash
allure serve allure-results
```

> `serve` runs a local server without saving the report to disk.

---

## 🧪 Sample Test Scenario

```js
Feature('User Form');

Scenario('Create user with valid input', ({ I }) => {
  const user = {
    firstName: 'Chan',
    lastName: 'Dhru',
    email: 'chan@example.com',
    age: 18,
    salary: 10000,
    department: 'QA'
  };

  I.amOnPage('/user-form');
  I.createUser(user); // custom step
});
```

---

## ❓ Troubleshooting

| Problem                           | Solution                                      |
|----------------------------------|-----------------------------------------------|
| `allure-results does not exist`  | Make sure tests were run with Allure enabled  |
| No HTML report after generate    | Check that `allure-results/` contains files   |
| Allure not recognized            | Ensure `allure-commandline` is installed globally |
| Java error                       | Install Java JDK 8+ and add to system PATH     |

---

## 📚 Useful Commands Summary

| Command                                      | Description                          |
|---------------------------------------------|--------------------------------------|
| `npx codeceptjs run --plugins allure`       | Run tests and generate result files  |
| `allure generate --clean allure-results`    | Generate final HTML report           |
| `allure open allure-report`                 | Open the HTML report in browser      |
| `allure serve allure-results`               | Serve temporary report               |

---

## 🧩 Good Practices

- Use `/pages` for storing selectors & actions (POM)
- Use `/utils` for reusable validation logic
- Keep test files minimal — logic should go into steps/pages
- Use `output/` for saving screenshots on failure

---

## 👨‍💻 Author

Created by G S Chandhru.  
Feel free to fork, extend, or contribute to this repo.

---

## ✅ Done

Now you're ready to build, test, and report your UI tests with ease using CodeceptJS + Playwright + Allure!

