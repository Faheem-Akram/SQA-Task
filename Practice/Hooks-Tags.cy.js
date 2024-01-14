/// Hooks in Cypress
/// Before
/// After
/// BeforeEach
/// AfterEach

  describe ('MyTestSuite' ,() =>{

    before(()=>{
        cy.log("***** Launch App ******")
        
    })

    after (() =>{
        cy.log("****** close app *****")
    })

    beforeEach(() =>{
        cy.log("******* Login *****")
        })
        
    afterEach(() =>{
        cy.log("******* Logut *****")
        })

    it ('search', () =>{
        cy.log("******** Searching  **********")
    })
    it ('advance search', () =>{
        cy.log("******** Advance Searching  **********")
    })
    it ('listing products', () =>{
        cy.log("******** listing products  **********")
    })

    
  })