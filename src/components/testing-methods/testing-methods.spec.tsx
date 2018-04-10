import { TestWindow } from '@stencil/core/testing';
import { TestingMethods } from './testing-methods';

describe.only('testing-methods', () => {
  it('should build', () => {
    expect(new TestingMethods()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;
    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [TestingMethods],
        html: '<testing-methods></testing-methods>'
      });
    });

    it('should be able to call method to increment count', async () => {
      element.incrementCount();
      await window.flush();
      expect(element.textContent).toBe('1');
    });
  });
});
