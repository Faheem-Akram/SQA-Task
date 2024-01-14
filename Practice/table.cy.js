/// <reference types="Cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  }) 

  describe('Handle table ' , ( () =>{
    beforeEach('Login', () =>{
        cy.visit("https://demo.opencart.com/admin/index.php?route=common/login")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click()
        cy.get("#menu-customer").click()  // Customers main menu
        cy.get("#menu-customer > ul > li:first-child").click() //  Cutomers sub-item
        })

        it('check number rows and columns', () => {
            cy.get(".table.table-bordered.table-hover > tbody > tr").should('have.length', '10')
            cy.get(".table.table-bordered.table-hover > thead > tr > td").should('have.length', '7')
        })

        it('check cell data from specific cell', () => {
        cy.get(".table.table-bordered.table-hover > tbody > tr:nth-child(5)>td:nth-child(3)")
        .contains("demo234566@gmail.com")
        })
        
        it('reading all the rows & columns data', () => {
        cy.get(".table.table-bordered.table-hover > tbody > tr")
        .each( ($row, index, $rows) =>{
          cy.wrap($row).within( () =>{
            cy.get("td").each( ($col, index, $cols)=>{
              cy.log($col.text());
            } )
          })
        })
        })

        it.only('pagination', () => {
          // find total number of pages
          // let totalPages;
          // cy.get(".col-sm-6.text-end").then( (e) =>{
          // let mytext = e.text();  // Showing 1 to 10 of 14552 (1456 Pages)
          // totalPages =  mytext.substring(mytext.indexOf("(") +1, mytext.indexOf("Pages")-1);
          // cy.log("Total number of pages in a table" + totalPages);
          // })

          let totalPages=5;
          for (let p = 1; p <= totalPages; p++) {
            if (totalPages>1) {
              cy.log("Active page is === " +p);
              cy.get("ul[class$='pagination'] > li:nth-child("+p+")").click();
              cy.wait(3000);

              cy.get(".table.table-bordered.table-hover > tbody > tr")
              .each(($row, index, $rows) =>{

                cy.wrap($row).within( () =>{
                  cy.get('td:nth-child(3)').then( (e) =>{
                    cy.log(e.text());  // Email
                  })
                  })
                })
              }
            }
          })
  }))