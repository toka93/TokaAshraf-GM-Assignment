## UI testscripts using Cypress and Typescript
 multiple tests on http://the-internet.herokuapp.com 
 using pageobject deign pattern and data driven approach for Login test.


### setup
- npm install 
- npm install cypress --save-dev
- npm init
- To install report: npm i --save-dev cypress-mochawesome-reporter
- For more info, please check : https://docs.cypress.io/guides/getting-started/installing-cypress


### Running tests locally
- To open Cypress' GUI run `cypress open`. The you will be able to run the tests from there
- To run in headless mode and generate report run : `cypress run --reporter mochawesome`

### Tests implemented:
- 2 specs contains 5 scripts and 1 script with Data Driven(run 3 times)were implemented.
- The page object pattern was used
- Application under test: http://the-internet.herokuapp.com 
