import { newSpecPage } from '@stencil/core/testing';
import { TestingRender } from './testing-render';

describe('testing-render', () => {
  it('should build', () => {
    expect(new TestingRender()).toBeTruthy();
  });

  describe('rendering', () => {
    let page;
    beforeEach(async () => {
      page = await newSpecPage({
        components: [TestingRender],
        html: '<testing-render></testing-render>'
      });
    });

    it('should be able to render component', async () => {
      await page.waitForChanges();
      expect(page.root.querySelectorAll('[data-test="day"]').length).toEqual(7);
    });
  });
});
