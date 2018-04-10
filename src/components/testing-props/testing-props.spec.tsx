import { TestWindow } from '@stencil/core/testing';
import { TestingProps } from './testing-props';

describe('testing-props', () => {
  it('should build', () => {
    expect(new TestingProps()).toBeTruthy();
  });

  describe('can pass props using element attributes', () => {
    let window;
    let element;
    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [TestingProps],
        html: '<testing-props first="Peter" last="Parker"></testing-props>'
      });
    });

    it('should work with both the first and the last name', async () => {
      await window.flush();
      expect(element.textContent).toEqual('Hello, my name is Peter Parker');
    });
  });

  describe('can change props via element', () => {
    let element;
    let window;
    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [TestingProps],
        html: '<testing-props></testing-props>'
      });
    });

    it('should work with both the first and the last name', async () => {
      element.first = 'Peter';
      element.last = 'Parker';
      await window.flush();
      expect(element.textContent).toEqual('Hello, my name is Peter Parker');
    });
  });
});
