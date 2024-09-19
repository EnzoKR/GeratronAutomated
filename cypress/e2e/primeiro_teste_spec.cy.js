describe('Teste de geração de senha', () => {
  beforeEach(() => {
    // cy.visit é usado para "visitar" sites ou arquivos no localhost 
    cy.visit('http://localhost/geratron/src/view/generator.html');
  });

  it('Gera senha, desmarca checkbox de números e verifica a nova senha', () => {
    cy.get('img').click(); // clica no botão de gerar nova senha
    // Guardar o valor da senha gerada
    cy.get('#inpPassword').invoke('val').then((senhaInicial) => {

      cy.get('#numbers').uncheck(); // Desmarcar checkbox de números
      //cy.get('img').click();

      // Guardar a nova senha
      cy.get('#inpPassword').invoke('val').then((novaSenha) => {
        // Verifica se a nova senha é diferente da senha inicial
        expect(novaSenha).to.not.equal(senhaInicial);

        // Verifica se a nova senha não contém números
        const regexNumeros = /\d/;
        expect(novaSenha).to.not.match(regexNumeros);
      });
    });
  });

  // utilizando comandos customizados (support -> commands.js)

  it('Desmarca números e verifica a nova senha', () => {
    cy.VerificaSenha('#numbers', /\d/);  
  });

  it('Desmarca Letras Minúsculas e verifica a nova senha', () => {
    cy.VerificaSenha('#minor', /[a-z]/);  
  });

  it('Desmarca Letras Maiúsculas e verifica a nova senha', () => {
    cy.VerificaSenha('#major', /[A-Z]/);  
  });

  it('Desmarca Caracteres Especiais e verifica a nova senha', () => {
    cy.VerificaSenha('#symbols', (/[!@#$%&*()\/\-\_\[\]=+><]/));  
  });

  it('Desmarca a opçao Tira caracteres confusos: Il1, o0O e verifica a nova senha', () => {
    cy.VerificaSenha('#rdStyle-2', /[Il10oO]/);  
  }); 

});
