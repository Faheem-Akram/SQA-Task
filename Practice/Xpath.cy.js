

describe ("xpathlocators", () => {
    it ("find number of products", () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.xpath("//ul[@class='htmlcontent-home clearfix row']/li").should("have.length", 7)
    })

    
})