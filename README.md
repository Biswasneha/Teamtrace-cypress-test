# teamtrace-cypress
# TeamTrace Cypress E2E Tests

This repository contains Cypress end-to-end (E2E) test specs for TeamTrace web application.

## Project Structure

```
cypress_e2e_template/
├── cypress/
│   ├── e2e/
│   │   ├── signup.cy.js
│   │   └── login.cy.js
│   ├── fixtures/
│   │   ├── signup.json
│   │   └── login.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
└── README.md
```

## Getting Started

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Run Cypress tests in headless mode:**
   ```
   npx cypress run
   ```

3. **Merge all JSON reports:**
   ```
   npx cypress run  
   ```
4. **Generate HTML report:**
   ```
   npm run generate-html
   ```

5. **Run Cypress tests in interactive mode:**
   ```
   npx cypress open
   ```

## Test Specs

- **signup.cy.js**  
  Automates the user registration flow using fixture data.

- **login.cy.js**  
  Automates the login flow using fixture data.

## Fixtures

- **signup.json**  
  Contains test data for the signup flow.
- **login.json**  
  Contains test data for the login flow.

## Configuration

- Update `cypress.config.js` for baseUrl and other settings as needed.

## Notes

- For reCAPTCHA fields, tests may require manual intervention or mocking in the test environment.
- Ensure all required fields in fixtures are present and valid.

## Contributing

Feel free to fork and submit pull requests for improvements or new test cases.# teamtrace-cypress