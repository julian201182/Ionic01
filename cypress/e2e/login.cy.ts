describe('Login en Ionic', () => {
  it('debe permitir iniciar sesión con credenciales válidas', () => {
    cy.visit('http://localhost:8100/login');

    cy.get('ion-input[formControlName="email"] input').type('usuario@correo.com');
    cy.get('ion-input[formControlName="password"] input').type('123456');
    cy.get('ion-button[type="submit"]').click();

    cy.url().should('include', '/home');
    cy.contains('Bienvenido');
  });
});
