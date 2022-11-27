/// <reference types="cypress" />

/*OBS o objetivo e demonstrar apenas o conhecimento sobre os comandos PARTE RELATIVA como ORGANIZACAO ou IDEIAS de teste etc NAO E O MEU FOCO 
aqui o foco E APENAS EM COISAS OBEJTIVAS*/

describe('teste', ()=>{
    
    beforeEach(()=>{
      cy.clearCookies()
    })
       

        it('API test 1 GET', ()=>{
           cy.request({
               method: 'GET',
               url: '/todos',
           }).then((res) =>{
               expect(res.body[0].id).have.be.a('Number')
               expect(res.body[0].completed).to.be.equal(false)
               expect(res.body[0].title).have.be.a('String')
           })  
       })
   
   
       it('API teste 2 GET', ()=>{ 
           cy.request({
               method: 'GET',
               url: '/todos',
           }).as('response')
           
           cy.get('@response').then(res=>{
               res.body.forEach(item => { 
                   expect(item.id).have.be.a('Number')
                   expect(item.title).have.be.a('String')
               })
           })
        })
   
        
        it('API teste 3 GET', ()=>{
           cy.request({
               method: 'GET',
               url: '/todos/1',
           }).as('response')
   
           cy.get('@response').its('body.title').should('not.be.null')
           cy.get('@response').its('body.id').should('not.be.null')
           cy.get('@response').its('body.completed').should('not.be.true')
        })
   
       it('API test 4 POST',() =>{
           cy.request({
               method:'POST',
               url:'/posts',
               body: JSON.stringify({
                   body:'greatbody',
                   title: 'cypress teste',
                   userID:1
               }),
               headers: {'Content-type': 'application/json; charset=UTF-8'},
           }).then((res) => {
                   expect(res.body).have.property('title','cypress teste')
                   expect(res.body.title).have.be.a('String')
               })   
       })

       it('API teste DELETE',() =>{
        cy.request({
           method:'DELETE',
           url:'/posts/1' 
        }).then(res=>{
            expect(res.status).to.be.equal(200)
        })
       })
   
   })