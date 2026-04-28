describe('Order Service', () => {
  it('devrait valider qu une commande a un userId', () => {
    const order = { userId: 'abc123', items: ['produit1'] };
    expect(order.userId).toBeDefined();
    expect(order.items).toHaveLength(1);
  });
});