import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('testing-render', () => {
  describe('rendering', () => {
    let page: E2EPage;
    let element: E2EElement;

    beforeEach(async () => {
      page = await newE2EPage({
        html: `
        <testing-render></testing-render>
      `
      });
      element = await page.find('testing-render');
    });

    it('should be able to render component', async () => {
      const dayElements = await element.findAll('[data-test="day"]');
      expect(dayElements.length).toEqual(7);
    });
  });
});
