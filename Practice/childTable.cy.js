/// <reference types="Cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  }) 

  describe ('Handle-tabs-approach 1', ()=>{

    //  Target Page will opened in the same page

    it('approach1',() =>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get(".example >a").invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.go('back')  // back to parent tab
    })

    
  })