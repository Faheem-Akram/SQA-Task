

describe('csslocators', () => {
    it('firstlocator', () => 
    {
     cy.visit("http://www.automationpractice.pl/index.php")
     cy.get("#search_query_top").type("T-shirts") //Id Selector
     cy.get("[name$='submit_search']").click() //attribute Selector
     cy.get(".lighter").contains("T-shirts")  //class selector,  Assertion[contains("T-shirts")]
    })

  }
  )