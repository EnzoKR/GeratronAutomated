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

/* IGNORA O ERRO JQUERY NO FORMULÁRIO */ 
Cypress.on('uncaught:exception', (err, runnable) => {
    // Exibir o erro no console
    console.error('Ocorreu um erro:', err.message);
   // Retornar false para que o Cypress não marque o teste como falho
    return false;
});

Cypress.Commands.add("VerificaSenha", (token, vari) => {
    cy.get('img').click(); // clica no botão de gerar nova senha

    // Guardar o valor da senha gerada
    cy.get('#inpPassword').invoke('val').then((senhaInicial) => {

        cy.get(token).click(); // Desmarcar checkbox de números
        //cy.get('img').click();

        // Guardar a nova senha
        cy.get('#inpPassword').invoke('val').then((novaSenha) => {
        // Verifica se a nova senha é diferente da senha inicial
        expect(novaSenha).to.not.equal(senhaInicial);

        // Verifica se a nova senha não contém números
        const regexVari = vari;
        expect(novaSenha).to.not.match(regexVari);
        });
    
    });

  });
