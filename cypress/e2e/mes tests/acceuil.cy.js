/// <reference types="cypress" />


beforeEach(() => {
    cy.visit('https://demoqa.com/');
});
describe('demoqa Homepage Tests', () => {
    it('tester si le logo est visible', { tags: ['smoke'] }, () => {
        cy.get('.home-banner').should('be.visible');
        cy.wait(3000);
    });
   
    it('tester si les cartes de catégorie sont visibles', { tags: ['smoke'] }, () => {
        cy.get('.category-cards').should('be.visible');
        cy.wait(1000);
        cy.get('.banner-image').should('be.visible');

    });
});

  