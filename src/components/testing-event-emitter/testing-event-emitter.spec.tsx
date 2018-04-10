import { TestWindow } from '@stencil/core/testing';
import { TestingEventEmitter } from './testing-event-emitter';


describe('testing-event-emitter', () => {
  it('should build', () => {
    expect(new TestingEventEmitter()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;
    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [TestingEventEmitter],
        html: '<testing-event-emitter></testing-event-emitter>'
      });
      await window.flush();
    });

    it('should be able to confirm event emitter using a xxx', async () => {

      // arrange      
      const _callback = jest.fn();
      element.addEventListener('somethingHappened', _callback);
      await window.flush();

      // act
      element.querySelector('button').click();

      // assert
      expect(_callback).toHaveBeenCalled();
    });
  });
});
