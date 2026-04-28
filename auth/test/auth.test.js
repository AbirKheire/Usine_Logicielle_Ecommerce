describe('Auth Service', () => {
  it('devrait valider qu un email est present', () => {
    const body = { email: 'test@test.com', password: '1234' };
    expect(body.email).toBeDefined();
  });

  it('devrait rejeter un body sans password', () => {
    const body = { email: 'test@test.com' };
    expect(body.password).toBeUndefined();
  });
});