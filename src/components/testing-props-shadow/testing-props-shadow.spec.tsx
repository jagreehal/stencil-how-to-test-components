import { newSpecPage } from '@stencil/core/testing';
import { TestingPropsShadow } from './testing-props-shadow';

describe('testing-props', () => {
  it('should build', () => {
    expect(new TestingPropsShadow()).toBeTruthy();
  });

  describe('testing-props-shadow-unit', () => {
    let page;
    let element;

    beforeEach(async () => {
      page = await newSpecPage({
        components: [TestingPropsShadow],
        html:
          '<testing-props-shadow first="Peter" last="Parker"></testing-props-shadow>',
        supportsShadowDom: true
      });

      element = page.root.shadowRoot;
    });

    it('should work with both the first and the last name', async () => {
      expect(element.textContent).toEqual('Hello, my name is Peter Parker');
    });

    it('should be able to change first and the last name', async () => {
      page.root.first = 'Bruce';
      page.root.last = 'Wayne';

      await page.waitForChanges();

      expect(element.textContent).toEqual('Hello, my name is Bruce Wayne');
    });
  });
});
