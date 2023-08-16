/// <reference types="Cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
}) 

describe('qa-task', () => {
  it('first-task', () => 
  {
   cy.visit("https://demoqa.com/")
   cy.contains('Forms').click();
   cy.get('.element-list.collapse.show').click()

   cy.get('#firstName').type('Cowlar');
   cy.get('#lastName').type('Developer');
   cy.get('#userEmail').type('qaengineer@cowlar.com');
   cy.get("[for$='gender-radio-1']").click()
   cy.get('#userNumber').type('0123456789');
   cy.get('#subjectsInput').type('Computer Science').type('{enter}');
   cy.get("[for$='hobbies-checkbox-3']").click()
   cy.get("#currentAddress").type("Address 1")

   cy.contains("Select State").click({force: true}).type("NCR{enter}");
   cy.contains("Select City").click({force: true}).type("Delhi{enter}");

   cy.contains("Submit").click({force: true});

    // Verify the submitted data in the Modal

    cy.contains('Cowlar');
    cy.contains('Developer');
    cy.contains('qaengineer@cowlar.com');
    cy.contains('Male');
    cy.contains('0123456789');
    cy.contains('Computer Science');
    cy.contains('Music');
    cy.contains('Address 1');
    cy.contains('NCR');
    cy.contains('Delhi');

    // Close the Modal
    cy.contains('Close').click({force: true});
  })
}
)