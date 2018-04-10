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

    // this fails at the moment :(
    it('should be able to confirm event emitter', async () => {

      // arrange
      const callback = jest.fn();
      const div = document.createElement('div');
      document.body.appendChild(div);
      div.addEventListener('somethingHappened', callback);

      // act
      element.querySelector('button').click();

      // assert
      expect(callback).toHaveBeenCalled();
    });

    it('but testing custom events do work!', () => {
      // arrange
      const callback = jest.fn();
      const div = document.createElement('div');
      document.body.appendChild(div);

      div.addEventListener('click', callback);

      const event = document.createEvent('CustomEvent');
      event.initEvent('click', true, true);
      div.dispatchEvent(event);

      // assert
      expect(callback).toHaveBeenCalled();
    });

    it('should be able to confirm event emitter using a spy', async () => {

      // arrange      
      element.somethingHappened = {
        emit: () => { }
      };

      const spy = jest.spyOn(element.somethingHappened, 'emit');

      // act
      element.querySelector('button').click();

      // assert
      expect(spy).toHaveBeenCalled();
    });
  });
});
