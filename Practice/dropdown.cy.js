/// <reference types="Cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  }) 

  describe ('Auto suggest dropdown', () => {
    it.skip ('dynamicdrpdown' , () => {
        cy.visit("https://www.wikipedia.org/")

        cy.get("#searchInput").type("Pakistan")

        cy.get(".suggestion-title").contains('Tehreek-e-Insaf').click()

    })

    it ('moredynamicdrpdown' , () => {
        cy.visit("https://www.google.com/")

        cy.get("#APjFqb").type("pakistan")

        cy.wait(3000)

        cy.get(".wM6W7d").should('have.length', 12)

        cy.get(".wM6W7d").each( ($el, index, $list ) =>{
          if($el.text() == 'pakistan today')
          {
            cy.wrap($el).click()
          }
        })

    })
  })