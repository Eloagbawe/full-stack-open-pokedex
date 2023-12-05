describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('pokemon page can be opened and renders abilities', function() {
    cy.visit('http://localhost:5000')
    cy.get('.list-item').eq(0).click()
    cy.contains('Hidden ability')
    cy.contains('speed')
    cy.contains('attack')
    cy.contains('chlorophyll')


  })
  it('should render previous and next urls if they exist', function() {
    cy.visit('http://localhost:5000')
    cy.get('.list-item').eq(1).click()
    cy.contains('Previous')
    cy.contains('Next')
    cy.contains('Home')
    cy.contains('Next').click()
    cy.contains('venusaur')
    cy.contains('Previous').click()
    cy.contains('ivysaur')
    cy.contains('Home').click()
    cy.contains('nidorina')
  })
})
