# Automatizando Testes com Cypress

## O que é o Cypress?

O Cypress é uma ferramenta de automação de testes focada em aplicações web modernas. Ele permite testar tudo o que acontece dentro do navegador de maneira rápida, simples e confiável. A sua arquitetura é desenhada para oferecer uma experiência de desenvolvimento integrada, o que facilita a escrita de testes automatizados e o processo de depuração.

## Geratron - Gerador de Senhas

O projeto **Geratron**, consiste em um gerador de senha com opção de gerar senha com letras minúsculas, letras minúsculas, números, caracteres especiais, remoção de caracteres parecidos, podendo também, alterar a quantidade de caracteres que serão usadas para gerar a senha. Em que foi proposto durante um minicurso sobre Electron, apresentado no evento de Semana de Tecnologia e ministrado por Thiago Waib e Renan Medeiros, que fazem parta do grupo de desenvolvimento da DSIN Tecnologia da Informação. Esse projeto foi utilizado como base para aplicar conhecimentos sobre testes manuais, análise de teste e criação de testes automatizados.

Você pode acessar o repositório do Geratron no GitHub através do seguinte link:

[https://github.com/thiagowaib/geratron.git](https://github.com/thiagowaib/geratron.git)

## Executando o Cypress

### Clonar o repositório
git clone https://github.com/usuario/nome-repositorio.git
cd nome-repositorio
### Instalar dependências com npm
npm install
###Instalar Cypress
npm install cypress --save-dev
### Abrir Cypress
npx cypress open
### Executar testes sem interface
npx cypress run



