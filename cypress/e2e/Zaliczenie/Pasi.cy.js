/// <reference types="cypress" />

beforeEach('Visit site',()=>{
    cy.visit('/');
    cy.url().should('contain','pasi-konik');
    cy.url().should('equal', 'https://pasi-konik.pl/');
}) 

describe('Tests of cookie pop-up on site',()=>{   
    it('Accept Cookies', ()=>{
        cy.get('#action-custom-css > a.m-button.m-accept').should('be.visible');
        cy.get('#action-custom-css > a.m-button.m-accept').click();
        cy.get('#action-custom-css > a.m-button.m-accept').should('not.be.visible');
    })
    it('Reject Cookies', ()=>{
         cy.get('#action-custom-css > a.m-button.m-decline').should('be.visible');
         cy.get('#action-custom-css > a.m-button.m-decline').click();
         cy.get('#action-custom-css > a.m-button.m-decline').should('not.be.visible');
    })
    it('More information', ()=>{
        cy.get('#action-custom-css > a:nth-child(3)').should('be.visible');
        cy.get('#action-custom-css > a:nth-child(3)').click();
        cy.url().should('contain','privacy-policy-cookie-restriction-mode');
    })
})

describe('Tests of search on site',()=>{
    it('Get input',()=>{
        cy.get('#search_mini_form > div.field.search>label')
    })

    it('Search item with {enter}', () => {
        cy.get('#search').click();
        cy.get('#search').clear().type('kaski').type('{enter}');
        cy.url().should('contain', '?q=kaski');
    })
    it('Search on site with click on sugestion programability eq', () => {
                cy.get('#search_mini_form').click();
                cy.get('#search').clear().type('kaski').wait(2000);
                cy.get('#qs-option-1').eq(0).click();
                cy.url().should('contain','?q=+Kaski+czarne');
            })
})

describe('Test of tool bar redirections on site', ()=>{
    it('Shows contact page', ()=>{
        cy.get('#html-body > div.page-wrapper > header > div.main-panel-top > div > div > div > div > ul > li:nth-child(2) > a').click();
        cy.url().should('contain','kontakt');
    })    
        it('Shows creating account page', ()=>{
        cy.get('#idC8R13Rak').click();
        cy.url().should('contain','/customer/account/create/');
    })
        it('Shows login page and log in', ()=>{
        cy.get('#html-body > div.page-wrapper > header > div.main-panel-top > div > div > div > div > ul > li.link.authorization-link > a').click();
        cy.url().should('contain','/customer/account/login/referer/');
        cy.get('#email').type('emiliatest13@gmail.com');
        cy.get('#pass').type('Ty4syVXJD34mwMm');
        cy.get('#send2').click();
        cy.url().should('contain','/customer/account/');
    })
    it('Redirecting to Eskadron products, picking item properties and putting it into the basket', ()=>{
        cy.get('#platinumblock > .owl-carousel > .owl-stage-outer > .owl-stage > :nth-child(1) > .item > a > img') .click();
        cy.url().should('contain','/kolekcje/wiosna-lato-2023/eskadron-pure');
        cy.get('#layer-product-list > div.products.wrapper.grid.columns4.products-grid > ol > li.item.product.product-item.nth-child-2np1.nth-child-3np1.nth-child-4np1.nth-child-5np1.nth-child-6np1.nth-child-7np1.nth-child-8np1 > div > div.product.details.product-item-details > strong > a').click();
        cy.url().should('contain','/eskadron-platinum-pure-czaprak-cotton-navy');
        // cy.get('#attribute196').find('#attribute196 > option:nth-child(2)').click();
        // cy.get('#attribute197').find('#attribute197 > option:nth-child(6)').click();
        // cy.get('#product-addtocart-button').click();
        // cy.url().should('contain','/eskadron-platinum-pure-czaprak-cotton-navy#');
    })
}) 


    

    
    

