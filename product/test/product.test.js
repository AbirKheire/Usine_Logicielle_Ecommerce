describe('Product Service', () => {
  it('devrait valider qu un produit a un nom et un prix', () => {
    const product = { name: 'Chaise', price: 49.99 };
    expect(product.name).toBeDefined();
    expect(product.price).toBeGreaterThan(0);
  });
});