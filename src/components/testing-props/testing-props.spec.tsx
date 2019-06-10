import { newSpecPage } from '@stencil/core/testing';
import { TestingProps } from './testing-props';

describe('testing-props', () => {
  it('should build', () => {
    expect(new TestingProps()).toBeTruthy();
  });

  describe('can pass props using element attributes', () => {
    let page;
    let shadowRoot;
    beforeEach(async () => {
      page = await newSpecPage({
        components: [TestingProps],
        html: '<testing-props first="Peter" last="Parker"></testing-props>',
        supportsShadowDom: true
      });
      shadowRoot = page.root.shadowRoot;
    });

    it('should work with both the first and the last name', async () => {
      expect(shadowRoot.textContent).toEqual('Hello, my name is Peter Parker');
    });
  });

  describe('can change props via element', () => {
    let page;
    let shadowRoot;
    beforeEach(async () => {
      page = await newSpecPage({
        components: [TestingProps],
        html: '<testing-props></testing-props>',
        supportsShadowDom: true
      });
      shadowRoot = page.root.shadowRoot;
    });

    it('should work with both the first and the last name', async () => {
      page.root.first = 'Peter';
      page.root.last = 'Parker';
      await page.waitForChanges();
      expect(shadowRoot.textContent).toEqual('Hello, my name is Peter Parker');
    });
  });
});
