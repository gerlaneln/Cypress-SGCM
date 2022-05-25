/// <reference types="cypress"/>

describe('admin', () => {
    it('deve poder realizar login', () => {

        cy.visit('https://localhost:4200/login');

        cy.get('[name="nomeUsuario"]').type('admin');
        cy.get('[name="senha"]').type('admin');
        cy.get('[type="submit"]').click();

    });

    // it('deve poder cadastrar paciente', () => {

    //     //Clica no link "paciente" na navbar
    //     cy.get(':nth-child(3) > a').click();
    //     //clica no botão adicionar acima da tabela de pacientes
    //     cy.get('#comandos > .botao').click();
    //     //cadastro de paciente
    //     cy.get('[name="nome"]').type('Jane Doe');
    //     cy.get('[type="email"]').type('jane@doe.com');
    //     cy.get('[name="telefone"]').type('(69) 12345-1234');
    //     cy.get('[type="date"]').type('1996-05-21');
    //     cy.get('[name="grupoSanguineo"]').select('AB+');
    //     cy.get('[name="sexo"]').select('Feminino');
    //     cy.get('[name="endereco"]').type('Rua das Rosas, Nº 666 - Conjunto Vila');
    //     cy.get('[name="cep"]').type('12369-000');
    //     cy.get('[name="cidade"]').type('Dante');
    //     cy.get('[name="estado"]').select('Rio Grande do Norte');

    //     cy.get('[type="submit"]').click();
    // });

    // it('deve cadastrar profissional', () => {

    //     cy.get(':nth-child(4) > a').click();

    //     cy.get('#comandos > .botao').click();

    //     cy.get('[name="nome"]').type('James Doe');
    //     cy.get('[name="registroConselho"]').type('1972CRM/AC');
    //     cy.get('[name="especialidade"]').select('Cardiologia');
    //     cy.get('[name="unidade"]').select('Bosque');
    //     cy.get('[name="telefone"]').type('(66) 12345-1234');
    //     cy.get('[type="email"]').type('james@doe');

    //     cy.get('[type="submit"]').click();

    // })

    // it('deve realizar atendimento', () => {

    //     cy.get('ul > :nth-child(1) > a').click();

    //     cy.get('#comandos > .botao').click();

    //     cy.get('[name="profissional"]').select('James Doe');
    //     cy.get('[name="data"]').type('2022-06-01');
    //     cy.get('[ng-reflect-name="hora"]').select('14:00');
    //     cy.get('[name="convenio"]').select('Amil');
    //     cy.get('[name=paciente]').select('Jane Doe');

    //     cy.get('[type="submit"]').click();
    // }) 

    it('filtra atendimentos', () => {

        cy.get('ul > :nth-child(1) > a').click();

        cy.get('.selectProf > .ng-untouched').select('James Doe');
        cy.get('[value="Filtrar"]').click();

        cy.get('.confirmacao').click();
        // cy.get('.chegada').click();

        // cy.get('ul > :nth-child(2) > a').click();


    });


});