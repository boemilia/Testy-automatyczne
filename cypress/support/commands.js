// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('lazy', () => {
    cy.log("I'm lazy")
})

Cypress.Commands.add('closepopup', () => {
    cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible')
})

Cypress.Commands.add('checkVisible',
    { prevSubject: 'element' },
    (subject, options) => {
        cy.wrap(subject).should('be.visible')
    })


Cypress.Commands.add('closePopUpB', () => {
    cy.get('body').then(($body) => {
        if ($body.find('#L2AGLb > .QS5gu').length > 0) {
            cy.get('#L2AGLb > .QS5gu').then(($button) => {
                if ($button.is(':visible')) {
                    cy.wrap($button).click();
                }
            })
        }
    })
})

Cypress.Commands.overwrite('type', 
    function(originalFn, element, text, options) {
    const d = new Date();
    let saltedtext = text.replace("[salt]", d.getUTCDate().toString() + "_" + (d.getUTCMonth() + 1).toString() +
        "_" + d.getHours().toString() + d.getMinutes().toString() + d.getUTCSeconds().toString());
    return originalFn(element, saltedtext, options);
});