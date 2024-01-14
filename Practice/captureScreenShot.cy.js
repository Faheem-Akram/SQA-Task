
describe(' Demo Test', () => {

    it('screenshot test', () => {
        
        // cy.visit("https://demo.opencart.com/")

        // cy.screenshot();

        // cy.get("#logo").screenshot("logo")

        // Automatically Capture screenshot & video on failure
        cy.visit("https://demo.opencart.com/")
        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should("have.text", "Tablets")

        })
    })