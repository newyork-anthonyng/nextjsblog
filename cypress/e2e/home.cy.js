describe('Home page', () => {
  it('should show articles', () => {
    // TODO: make this dynamic. It should point to Vercel preview deployment
    cy.visit("http://localhost:3000");
    cy.get('main').should('contain', 'When to Use Static Generation v.s. Server-side Rendering');
  });
});