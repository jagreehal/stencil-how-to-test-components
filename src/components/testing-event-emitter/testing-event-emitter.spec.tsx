import { newSpecPage } from '@stencil/core/testing';
import { TestingEventEmitter } from './testing-event-emitter';

describe('testing-event-emitter', () => {
  it('should build', () => {
    expect(new TestingEventEmitter()).toBeTruthy();
  });

  describe('rendering', () => {
    let page;
    beforeEach(async () => {
      page = await newSpecPage({
        components: [TestingEventEmitter],
        html: '<testing-event-emitter></testing-event-emitter>'
      });
    });

    it('should be able to confirm event emitter using a xxx', async () => {
      // arrange
      const _callback = jest.fn();
      page.doc.addEventListener('somethingHappened', _callback);
      await page.waitForChanges();

      // act
      page.root.querySelector('button').click();

      // assert
      expect(_callback).toHaveBeenCalled();
    });
  });
});
