import { render, flush } from '@stencil/core/testing';
import { TestingClickEvent } from './testing-click-event';

describe('testing-click-event', () => {
  it('should build', () => {
    expect(new TestingClickEvent()).toBeTruthy();
  });

  describe('when clicking', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TestingClickEvent],
        html: '<testing-click-event></testing-click-event>'
      });
    });

    it('should be able to set day class', async () => {
      await flush(element);
      element.querySelectorAll('[data-test="day"]')[2].click();
      await flush(element);
      expect(element.querySelector('.day-selected').textContent).toBe('Tu')
    });
  });
});
