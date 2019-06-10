import { newSpecPage } from '@stencil/core/testing';
import { UsingSnapshots } from './using-snapshots';

describe('using-snapshots', () => {
  it('should build', () => {
    expect(new UsingSnapshots()).toBeTruthy();
  });

  describe('rendering', () => {
    let page;

    beforeEach(async () => {
      page = await newSpecPage({
        components: [UsingSnapshots],
        html: '<using-snapshots></using-snapshots>'
      });
    });

    it('should work with both the first and the last name', async () => {
      page.root.first = 'Peter';
      page.root.last = 'Parker';
      await page.waitForChanges();
      expect(page.root).toMatchSnapshot();
    });
  });
});
