
describe(' Demo Test', () => {

    it('navigation test', () => {
        cy.visit("https://demo.opencart.com/")

        cy.title().should("eq", "Your Store")
        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should("have.text", "Cameras")

        cy.go("back"); // Go back to page
        cy.title().should("eq", "Your Store")

        cy.go("forward")  // Go Forward
        cy.get("div[id='content'] h2").should("have.text", "Cameras")

        cy.go(-1)  // Go back to page

        cy.go(1)  // Go forward to page

        cy.reload()
        })
    })