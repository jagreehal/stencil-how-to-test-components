import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('using-snapshots e2e', () => {
  describe('rendering', () => {
    let page: E2EPage;
    let element: E2EElement;

    beforeEach(async () => {
      page = await newE2EPage({
        html: `
        <using-snapshots></using-snapshots>
      `
      });
      element = await page.find('using-snapshots');
    });

    it('should work with both the first and the last name', async () => {
      await element.setProperty('first', 'Peter');
      await element.setProperty('last', 'Parker');
      await page.waitForChanges();

      expect(element.innerHTML).toMatchSnapshot();
    });
  });
});
