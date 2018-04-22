import { TestWindow } from '@stencil/core/testing';
import { UsingSnapshots } from './using-snapshots';

describe('using-snapshots', () => {
  it('should build', () => {
    expect(new UsingSnapshots()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;

    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [UsingSnapshots],
        html: '<using-snapshots></using-snapshots>'
      });
    });

    it('should work with both the first and the last name', async () => {
      element.first = 'Peter';
      element.last = 'Parker';
      await window.flush();
      expect(element).toMatchSnapshot();
    });
  });
});
