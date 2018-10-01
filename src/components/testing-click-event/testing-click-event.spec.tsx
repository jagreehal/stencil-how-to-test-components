import { TestingClickEvent } from './testing-click-event';

describe('testing-click-event', () => {
  it('should build', () => {
    expect(new TestingClickEvent()).toBeTruthy();
  });
});
