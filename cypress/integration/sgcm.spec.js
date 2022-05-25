/// <reference types="cypress"/>

describe('admin', () => {
    it('deve poder realizar login', () => {

        cy.visit('https://localhost:4200/login');

        cy.get('#nomeUsuario').type('admin');
        cy.get('#senhaUsuario').type('admin');
        cy.get('#botaoLogin').click();

    });

    it('deve poder cadastrar paciente', () => {

        //Clica no link "paciente" na navbar
        cy.get(':nth-child(3) > a').click();
        //clica no botão adicionar acima da tabela de pacientes
        cy.get('#comandos > .botao').click();
        //cadastro de paciente
        cy.get('[name="nome"]').type('Jane Doe');
        cy.get('[type="email"]').type('jane@doe.com');
        cy.get('[name="telefone"]').type('(69) 12345-1234');
        cy.get('[type="date"]').type('1996-05-21');
        cy.get('[name="grupoSanguineo"]').select('AB+');
        cy.get('[name="sexo"]').select('Feminino');
        cy.get('[name="endereco"]').type('Rua das Rosas, Nº 666 - Conjunto Vila');
        cy.get('[name="cep"]').type('12369-000');
        cy.get('[name="cidade"]').type('Dante');
        cy.get('[name="estado"]').select('Rio Grande do Norte');

        cy.get('[type="button"]').click();
    });

    it('deve cadastrar profissional', () => {

        cy.get(':nth-child(4) > a').click();

        cy.get('#comandos > .botao').click();

    })
});