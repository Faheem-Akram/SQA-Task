/// <reference types="Cypress"/>
import "cypress-iframe"
require ("@4tw/cypress-drag-drop")

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  }) 

describe ('Mouse operations',  ()=>{
    it('right click', () =>{
        cy.visit("https://demo.opencart.com/")

        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").should('not.be.visible')

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();

        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").should('be.visible')
    })

    it('right click' , () =>{

        //Approach 1
        // cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        // cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
        // cy.get(".context-menu-icon-copy > span").should('be.visible')

        //Approach 2
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get(".context-menu-icon-copy > span").should('be.visible')
    })

    it('Double click' , () =>{
        cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick')
        cy.frameLoaded('#iframeResult');   //  Load the frame

        // Approach 1
        cy.iframe("#iframeResult").find("p[ondblclick='myFunction()']").dblclick();
    })

    it('Drag & drop using Plugin', () =>{
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
        cy.wait(3000);
        cy.get("#box6", ).drag('#box106', {force:true});
    })

    it.only('Scrolling page' , () =>{
        cy.visit("https://www.worldometers.info/geography/how-many-countries-are-there-in-the-world/")
        cy.get(':nth-child(5) > [style="font-weight: bold; font-size:15px; text-align:left"] > a').scrollIntoView();
        cy.get(':nth-child(5) > [style="font-weight: bold; font-size:15px; text-align:left"] > a').should('be.visible')
    })
})