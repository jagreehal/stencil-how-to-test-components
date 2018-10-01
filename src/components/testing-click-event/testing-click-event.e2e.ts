import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('testing-click-event', () => {
  describe('when clicking', () => {
    let page: E2EPage;
    let element: E2EElement;

    beforeEach(async () => {
      page = await newE2EPage({
        html: `
        <testing-click-event></testing-click-event>
      `
      });
      element = await page.find('testing-click-event >>> div');
    });

    it('should be able to set day class', async () => {
      const elToClick = await element.find('[data-test="day"]:nth-child(3)');
      await elToClick.click();

      await page.waitForChanges();

      const daySelected = await element.find('.day-selected');
      expect(daySelected).toEqualText('Tu');
    });
  });
});
