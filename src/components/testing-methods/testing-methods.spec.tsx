import { newSpecPage } from '@stencil/core/testing';
import { TestingMethods } from './testing-methods';

describe('testing-methods', () => {
  it('should build', () => {
    expect(new TestingMethods()).toBeTruthy();
  });

  describe('rendering', () => {
    let page;
    let shadowRoot;
    beforeEach(async () => {
      page = await newSpecPage({
        components: [TestingMethods],
        html: '<testing-methods></testing-methods>',
        supportsShadowDom: true
      });
      shadowRoot = page.root.shadowRoot;
    });

    it('should be able to call method to increment count', async () => {
      await page.root.incrementCount();
      await page.waitForChanges();
      expect(shadowRoot.textContent).toBe('1');
    });
  });
});
