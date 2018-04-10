import { render, flush } from '@stencil/core/testing';
import { TestingUpdatesAriaProperty } from './testing-updates-aria-property';

describe('testing-updates-aria-property', () => {
  it('should build', () => {
    expect(new TestingUpdatesAriaProperty()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TestingUpdatesAriaProperty],
        html: '<testing-updates-aria-property></testing-updates-aria-property>'
      });
      await flush(element);
    });

    it('should be hidden by default', async () => {    
      const content = element.querySelector('#content');      
      expect(content.getAttribute('aria-hidden')).toBe('true');
    });

    it('should NOT be hidden when toggled', async () => {    
      element.querySelector('[data-test="toggle"]').click();

      await flush(element);
      const content = element.querySelector('#content');   
      expect(content.getAttribute('aria-hidden')).toBe('false');
    });
  });
});
