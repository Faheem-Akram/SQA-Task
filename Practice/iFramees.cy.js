/// <reference types="Cypress"/>
import 'cypress-iframe'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  }) 

  describe ('iframe', () => {
    it('approach 1', () =>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
       
       const iframe = cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type("Welcome {cmd+a}");
        cy.get(" [aria-label$='Bold']").click();

    })

    // By using cypress iFrame Plugin

    it.only('approach 1', () =>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
       
      cy.frameLoaded('#mce_0_ifr') // Loading the frame

      cy.iframe('#mce_0_ifr').clear().type("Welcome {cmd+a}")
      cy.get(" [aria-label$='Bold']").click();
    })
  })