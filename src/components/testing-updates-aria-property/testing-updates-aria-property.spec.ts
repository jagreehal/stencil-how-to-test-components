import { newSpecPage } from '@stencil/core/testing';
import { TestingUpdatesAriaProperty } from './testing-updates-aria-property';

describe('testing-updates-aria-property', () => {
  it('should build', () => {
    expect(new TestingUpdatesAriaProperty()).toBeTruthy();
  });

  describe('rendering', () => {
    let page;
    let shadowRoot;
    beforeEach(async () => {
      page = await newSpecPage({
        components: [TestingUpdatesAriaProperty],
        html: '<testing-updates-aria-property></testing-updates-aria-property>',
        supportsShadowDom: true
      });
      shadowRoot = page.root.shadowRoot;
    });

    it('should be hidden by default', async () => {
      const content = shadowRoot.querySelector('#content');
      expect(content.getAttribute('aria-hidden')).toBe('true');
    });

    it('should NOT be hidden when toggled', async () => {
      shadowRoot.querySelector('[data-test="toggle"]').click();
      await page.waitForChanges();
      const content = shadowRoot.querySelector('#content');
      expect(content.getAttribute('aria-hidden')).toBe('false');
    });
  });
});
