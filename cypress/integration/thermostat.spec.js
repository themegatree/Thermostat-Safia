describe('Thermostat homepage', () => {
    it('Shows title', () => {
        cy.visit('/')
        cy.get('#header').should('contain', 'Thermostat')
    })

    xit('When button clicked, temperature increases by one', () => {
        cy.visit('/')
        cy.get('#button').click()
        cy.get('#message').should('contain', '21')
    })
})
