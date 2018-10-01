import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('testing-updates-aria-property', () => {
  describe('rendering', () => {
    let page: E2EPage;
    let element: E2EElement;

    beforeEach(async () => {
      page = await newE2EPage({
        html: `
        <testing-updates-aria-property></testing-updates-aria-property>
      `
      });
      element = await page.find('testing-updates-aria-property >>> div');
    });

    it('should be hidden by default', async () => {
      const content = await element.find('#content');
      expect(await content.getAttribute('aria-hidden')).toBe('true');
    });

    it('should NOT be hidden when toggled', async () => {
      const toggleElement = await element.find('[data-test="toggle"]');
      toggleElement.click();

      await page.waitForChanges();
      const content = await element.find('#content');
      expect(await content.getAttribute('aria-hidden')).toBe('false');
    });
  });
});
