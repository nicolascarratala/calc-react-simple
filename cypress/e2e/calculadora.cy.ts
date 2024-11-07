describe("Calculadora Simple", () => {
  beforeEach(() => {
    // Visita la aplicación antes de cada prueba
    cy.visit('http://localhost:3000'); // Asegúrate de que la app esté corriendo en localhost:3000
  });

  it("realiza la suma correctamente", () => {
    // Escribe el valor en el primer input
    cy.get('input').first().clear().type('5');

    // Escribe el valor en el segundo input
    cy.get('input').last().clear().type('10');

    // Hace clic en el botón de Sumar
    cy.contains('Sumar').click();

    // Verifica que el resultado sea 15
    cy.contains('Resultado: 15');
  });

  it("realiza la suma correctamente b", () => {
    // Escribe el valor en el primer input
    cy.get('input').first().clear().type('999');

    // Escribe el valor en el segundo input
    cy.get('input').last().clear().type('999');

    // Hace clic en el botón de Sumar
    cy.contains('Sumar').click();

    // Verifica que el resultado sea 15
    cy.contains('Resultado: 1998');
  });
});