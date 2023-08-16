/// <reference types="Cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
}) 

describe('task2', ()=> {

  it('secondtask', () => {
      cy.visit("https://demoqa.com/")
      cy.contains('Interactions').click()

      // Verify Interaction Page
      cy.contains('Elements');
      cy.contains('Forms');
      cy.contains('Alerts, Frame & Windows');
      cy.contains('Widgets');
      cy.contains('Interactions');
      cy.contains('Book Store Application');

      cy.contains('Resizable').click();

       // Verify Resizable is displayed on top
  cy.contains('Resizable').should('be.visible');

  // Verify the current height and width of Box 1
  cy.get('#resizableBoxWithRestriction').should('have.css', 'height', '200px');
  cy.get('#resizableBoxWithRestriction').should('have.css', 'width', '200px');
   
   // Resize Box 1
  cy.xpath("//div[@id='resizableBoxWithRestriction']//span[@class='react-resizable-handle react-resizable-handle-se']").trigger('mousedown', { which: 1 });
  cy.xpath("//div[@id='resizableBoxWithRestriction']//span[@class='react-resizable-handle react-resizable-handle-se']").trigger('mousemove', { clientX: 150, clientY: 150 });
  cy.xpath("//div[@id='resizableBoxWithRestriction']//span[@class='react-resizable-handle react-resizable-handle-se']").trigger('mouseup', { force: true });

   // Verify minimum height property
  cy.get('#resizableBoxWithRestriction').should('have.css', 'height', '150px');
  cy.get('#resizableBoxWithRestriction').should('have.css', 'width', '150px');

  // Resize Box 1
  cy.xpath("//div[@id='resizableBoxWithRestriction']//span[@class='react-resizable-handle react-resizable-handle-se']").trigger('mousedown', { which: 1 });
  cy.xpath("//div[@id='resizableBoxWithRestriction']//span[@class='react-resizable-handle react-resizable-handle-se']").trigger('mousemove', { clientX: 760, clientY: 500 });
  cy.xpath("//div[@id='resizableBoxWithRestriction']//span[@class='react-resizable-handle react-resizable-handle-se']").trigger('mouseup', { force: true });

   // Verify maximum height property
  cy.get('#resizableBoxWithRestriction').should('have.css', 'width', '500px');
  cy.get('#resizableBoxWithRestriction').should('have.css', 'height', '300px');

  // Make sure Box 2 is resizable (you can add similar checks if needed)
  cy.get('#resizable').should('have.css', 'position', 'relative');

})
})