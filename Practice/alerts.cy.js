/// <reference types="Cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  }) 

  describe ('Js alert', () => {
    it('Alerts', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert' , (t) =>{
            expect(t).to.contains('I am a JS Alert')
        })

        // alert window automatically closed

        cy.get("#result").should('have.text' , 'You successfully clicked an alert')
    }) 

    it('Js Confirm alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm' , (t) =>{
            expect(t).to.contains('I am a JS Confirm')
        })

        // cypress automatically closed the windoe by clicking OK Button

        cy.get("#result").should('have.text' , 'You clicked: Ok')
    })


    // Using js confirm clicking on Close button

    it('Js Confirm alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm' , (t) =>{
            expect(t).to.contains('I am a JS Confirm')
        })

        cy.on('window:confirm' , () => false) // cypress closes alert windor by clicking close button

        cy.get("#result").should('have.text' , 'You clicked: Cancel')
    })

    it('Js prompt', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win)=> {
            cy.stub(win, 'prompt').returns('Welcome');
        })

        cy.get("button[onclick='jsPrompt()']").click()
        // cypress will use ok button by default

        cy.get("#result").should('have.text' , 'You entered: Welcome')
    })

    it.skip('Authenticated alert', () => {

        cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: {username: 'admin', password: 'admin'}})

        cy.get("div[class='example'] p").should('have.contain', 'Congratulations! You must have the proper credentials.')
    })
  })