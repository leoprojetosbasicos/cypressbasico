/// <reference types="cypress" />

/*OBS o objetivo e demonstrar apenas o conhecimento sobre os comandos PARTE RELATIVA como ORGANIZACAO ou IDEIAS de teste etc NAO E O MEU FOCO 
aqui o foco E APENAS EM COISAS OBEJTIVAS*/

//Exemplo no teste 1
import locators from "../support/locators"


describe('test end to end', ()=>{

    beforeEach(()=>{
      cy.clearCookies()
      // isso vem de support/commands.js
      cy.indoNaPagina()
      // exemplo no teste 4
      cy.fixture('example.json').then(function (data) {
        this.example = data
      })
    })


      it('test 1 radio button element',() =>{
        cy.get(locators.radiobutton.opcao1).click().should('be.checked')
        cy.get(locators.radiobutton.radioelement).should('have.length',3)
      })
       
       
      it('test 2 dropdown element way1',()=>{
        cy.get(locators.dropdown.dropdwonelementoptions).then(res => {
          const values = []
          res.each(function(){
            values.push(this.innerHTML)
          })
          expect(values).to.include.members(['Select','Option1','Option2','Option3'])
        }) 
      })

      it('test 3 dropdwon element way 2',()=>{
        cy.get(locators.dropdown.dropdwonelementoptions).then(res =>{
          cy.wrap(res[0]).invoke('val').should('be.empty')
          cy.wrap(res[1]).invoke('val').should('deep.include','option1')
        })
      })

      it('test 4 dropdwon element using fixture ',function() {
        
        cy.get('fieldset #dropdown-class-example').select('Option2')
        cy.log(this.example.msglog)
      })

      it('test 5 autocomplete element',() =>{
        cy.get(locators.autocomplete.autocompleteelement).type('braz')
        cy.get('#ui-id-1 > li').click()
      })

      it('test 6 checkbox element',()=>{
        cy.get(locators.checkbox.opcao1).type('{enter}')
        cy.get(locators.checkbox.opcao2).click()
        cy.get(locators.checkbox.opcao3).should('not.be.checked')
      })

      it('test 7 alert',() =>{
        cy.get('#name').type('cypress')
        cy.get('#alertbtn').click()
        cy.on('window:alert', msg =>{
          expect(msg).to.be.eql('Hello cypress, share this practice page and share your knowledge')
        })
      })

})
