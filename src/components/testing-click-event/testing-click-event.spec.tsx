import { newSpecPage } from '@stencil/core/testing';
import { TestingClickEvent } from './testing-click-event';

describe('testing-click-event', () => {
  it('should build', () => {
    expect(new TestingClickEvent()).toBeTruthy();
  });

  describe('when clicking', () => {
    let page;
    let shadowRoot;
    beforeEach(async () => {
      page = await newSpecPage({
        components: [TestingClickEvent],
        html: '<testing-click-event></testing-click-event>',
        supportsShadowDom: true
      });
      shadowRoot = page.root.shadowRoot;
    });

    it('should be able to set day class', async () => {
      shadowRoot.querySelectorAll('[data-test="day"]')[2].click();
      await page.waitForChanges();
      expect(shadowRoot.querySelector('.day-selected').textContent).toBe('Tu');
    });
  });
});
