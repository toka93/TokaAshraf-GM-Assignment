export class LoginForm{

    elements = {
        getUserInputField: () =>  cy.get('input#username'),
        getPasswordInputField: () =>  cy.get('input#password'),
         getLoginButton : ()=> cy.get('button[type="submit"]'),
         getSuccessMsg:()=> cy.get('#flash'),
         getHeader:()=> cy.get("h2")
      
      };


      enterUserName(user:string)
      {
this.elements.getUserInputField().type(user);

      }
      enterPassword(pass:string)
      {
this.elements.getPasswordInputField().type(pass);

      }

      clickOnLogin() {
        this.elements.getLoginButton().click();
      }

      validateSuccessMsg(msg:string){
        return this.elements.getSuccessMsg().should('exist')
        .contains(msg)
      }
      ValidateHeaderText(title:string)
      { return this.elements.getHeader().should('have.text',title);}

}
export const LoginFormPage=new LoginForm();