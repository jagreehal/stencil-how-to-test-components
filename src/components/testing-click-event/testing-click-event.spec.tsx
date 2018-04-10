import { TestWindow } from '@stencil/core/testing';
import { TestingClickEvent } from './testing-click-event';

describe('testing-click-event', () => {
  it('should build', () => {
    expect(new TestingClickEvent()).toBeTruthy();
  });

  describe('when clicking', () => {
    let element;
    let window;
    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [TestingClickEvent],
        html: '<testing-click-event></testing-click-event>'
      });
    });

    it('should be able to set day class', async () => {
      await window.flush();
      element.querySelectorAll('[data-test="day"]')[2].click();
      await window.flush();
      expect(element.querySelector('.day-selected').textContent).toBe('Tu')
    });
  });
});
