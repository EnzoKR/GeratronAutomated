describe('template spec', () => {
  it('Visitando o site da univem', () => {
    cy.visit('https://sei.univem.edu.br/index.xhtml');

    cy.get('#form\\:usuario').type('47738385820');
    cy.get('#form\\:senha').type('616893');
    cy.get('#form\\:loginBtn\\:loginBtn').click();

    cy.url().should('eq','https://sei.univem.edu.br/visaoAluno/telaInicialVisaoAluno.xhtml');

  })
})
