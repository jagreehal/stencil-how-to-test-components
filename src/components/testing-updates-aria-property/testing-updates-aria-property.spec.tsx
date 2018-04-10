import { TestWindow } from '@stencil/core/testing';
import { TestingUpdatesAriaProperty } from './testing-updates-aria-property';

describe('testing-updates-aria-property', () => {
  it('should build', () => {
    expect(new TestingUpdatesAriaProperty()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;
    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [TestingUpdatesAriaProperty],
        html: '<testing-updates-aria-property></testing-updates-aria-property>'
      });
      await window.flush();
    });

    it('should be hidden by default', async () => {
      const content = element.querySelector('#content');
      expect(content.getAttribute('aria-hidden')).toBe('true');
    });

    it('should NOT be hidden when toggled', async () => {
      element.querySelector('[data-test="toggle"]').click();

      await window.flush();
      const content = element.querySelector('#content');
      expect(content.getAttribute('aria-hidden')).toBe('false');
    });
  });
});
