import { render, flush } from '@stencil/core/testing';
import { TestingProps } from './testing-props';

describe('testing-props', () => {
  it('should build', () => {
    expect(new TestingProps()).toBeTruthy();
  });

  describe('can pass props using element attributes', () => {
    let element;
    beforeEach(async () => {
      // @ts-ignore
      element = await render({
        components: [TestingProps],
        html: '<testing-props first="Peter" last="Parker"></testing-props>'
      });
    });

    it('should work with both the first and the last name', async () => {
      await flush(element);
      expect(element.textContent).toEqual('Hello, my name is Peter Parker');
    });
  });

  describe('can change props via element', () => {
    let element;
    beforeEach(async () => {
      // @ts-ignore
      element = await render({
        components: [TestingProps],
        html: '<testing-props></testing-props>'
      });
    });

    it('should work with both the first and the last name', async () => {
      element.first = 'Peter';
      element.last = 'Parker';
      await flush(element);
      expect(element.textContent).toEqual('Hello, my name is Peter Parker');
    });
  });
});
