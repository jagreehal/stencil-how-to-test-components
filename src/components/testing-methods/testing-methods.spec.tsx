import { render, flush } from '@stencil/core/testing';
import { TestingMethods } from './testing-methods';

describe.only('testing-methods', () => {
  it('should build', () => {
    expect(new TestingMethods()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TestingMethods],
        html: '<testing-methods></testing-methods>'
      });
    });

    it('should be able to call method to increment count', async () => {

      element.incrementCount();
      await flush(element);
      expect(element.textContent).toBe('1');

    });
  });
});
