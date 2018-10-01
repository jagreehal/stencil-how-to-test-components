import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('testing-event-emitter', () => {
  describe('rendering', () => {
    let page: E2EPage;
    let element: E2EElement;

    beforeEach(async () => {
      page = await newE2EPage({
        html: `
        <testing-event-emitter></testing-event-emitter>
      `
      });
      element = await page.find('button');
    });

    it('should be able to confirm event emitter using a xxx', async () => {
      // arrange
      const spy = await page.spyOnEvent('somethingHappened');

      // act
      element.click();
      await page.waitForChanges();

      // assert
      expect(spy).toHaveReceivedEventDetail({ message: 'clicked!' });
    });
  });
});
