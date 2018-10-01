import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('testing-methods', () => {
  describe('rendering', () => {
    let page: E2EPage;
    let element: E2EElement;

    beforeEach(async () => {
      page = await newE2EPage({
        html: `
        <testing-methods></testing-methods>
      `
      });
      element = await page.find('testing-methods');
    });

    it('should be able to call method to increment count', async () => {
      await element.callMethod('incrementCount');

      await page.waitForChanges();

      const contentElement = await page.find('testing-methods >>> div');

      expect(contentElement).toEqualText('1');
    });
  });
});
