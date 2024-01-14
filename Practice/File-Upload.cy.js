/// <reference types="Cypress"/>

import 'cypress-file-upload';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  }) 

describe ('File Upload', ()=>{
    it(' Single file upload', ()=>{
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get("#file-upload").attachFile("DSC.JPG");
    cy.wait(2000)
    cy.get("#file-submit").click();
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!")
    })
    
    it(' file upload - Rename', ()=>{
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get("#file-upload").attachFile({filePath:"DSC.JPG", fileName:"pic.JPG"});
    cy.wait(2000)
    cy.get("#file-submit").click();
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!")
    })

    it("File upload - Drag & Drop", ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile("DSC.JPG", {subjectType:"drag-n-drop"});
        cy.wait(2000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
        .contains("DSC.JPG")
    })

    it.only("Multiple files", ()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile([ "DSC", "DSC1"])
        cy.wait(2000)
        cy.get(':nth-child(6) > strong').should("contain.text", "Files You Selected:")
    })
})