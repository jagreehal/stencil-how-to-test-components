import { TestWindow } from '@stencil/core/testing';
import { TestingRender } from './testing-render';

describe('testing-render', () => {
  it('should build', () => {
    expect(new TestingRender()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;
    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [TestingRender],
        html: '<testing-render></testing-render>'
      });
    });

    it('should be able to render component', async () => {
      await window.flush();
      expect(element.querySelectorAll('[data-test="day"]').length).toEqual(7);
    });
  });
});
