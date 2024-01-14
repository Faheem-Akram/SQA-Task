
import Login from "../../Page Object/LoginPage2";

describe("POM", () =>{

    // General pproach
    it("Login Test", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
    })

    // POM Approach
    it("Login Test", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        const ln= new Login();

        ln.setUsername("Admin");
        ln.setPassword("admin123");
        ln.clickSubmit();
        ln.verifyLogin();
        
    })
    // Using POM with fixture
    it.only("Login Test", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       cy.fixture("orangeHRM.json").then((data) => {

        const ln= new Login();

        ln.setUsername(data.username);
        ln.setPassword(data.password);
        ln.clickSubmit();
        ln.verifyLogin(data.expected);
        })  
    })
})