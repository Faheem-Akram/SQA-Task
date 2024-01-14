

describe ('Assertions demo', () => {
    it('implicit assertions', () =>{
        // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // Implicit --> Should Assertion sopported keywords like contain, eq, include

        // cy.url().should('include','orangehrmlive')
        // cy.url().should('include','orangehrmlive')
        // cy.url().should('contain', 'opensource')

        // second way

        // cy.url().should('include','orangehrmlive')
        // .should('include','orangehrmlive')
        // .should('contain', 'opensource')
        
        // And Assertion

        //  cy.url().should('include','orangehrmlive')
        // .and('include','orangehrmlive')
        // .and('contain', 'opensource')

        // cy.title().should('contains', 'Orange')
        // .and('eq', 'OrangeHRM')
        // .and('contain', 'HRM')

        // cy.get('.orangehrm-login-branding > img').should('be.visible')
        // .and('exist')

        // cy.xpath('//a').should('have.length', '5')  // Number of links
        // cy.get("[name$='username']").type('Admin')
        // cy.get("[name$='username']").should('have.value', 'Admin')


    })

    it('explicit assertions', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // Explicit ---> except Assertion sopported keywords like contain, eq, include

        cy.get("[name$='username']").type('Admin')

        cy.get("[name$='password']").type('admin123')
        cy.get("[type$='submit']").click()

        let expectedname= "Paul Collings";

        cy.get(".oxd-userdropdown-name").then(  (x) => {
          let  actName = x.text()

          // BDD Style
          expect(actName).to.equal(expectedname)

          // TDD Style
          assert.equal(actName,expectedname)

        })

    })
})