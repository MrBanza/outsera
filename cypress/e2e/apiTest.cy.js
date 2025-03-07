

describe('Teste de API com Cypress', () => {
  
    it('GET - Buscar lista de posts', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.length.greaterThan(0);
        });
    });
  
    it('POST - Criar um novo post', () => {
      cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'Teste Cypress',
        body: 'Este é um teste de API usando Cypress',
        userId: 1,
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
      });
    });
  
    it('PUT - Atualizar um post', () => {
      cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'Título Atualizado',
        body: 'Corpo atualizado',
        userId: 1,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.title).to.eq('Título Atualizado');
      });
    });
  
    it('DELETE - Excluir um post', () => {
      cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  
  });