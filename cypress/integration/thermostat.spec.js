describe('Thermostat homepage', () => {
    it('Shows title', () => {
        cy.visit('/')
        cy.get('#header').should('contain', 'Thermostat')
    })
    // #header - referring to the ID you can also put . and this is looking for a class (linking similar elements e.g. same font/font size (class = font size 12)
    it('When button clicked, temperature increases by one', () => {
        cy.visit('/')
        cy.get('#up').click()
        cy.get('#temperature').should('contain', '21')
    })
})
