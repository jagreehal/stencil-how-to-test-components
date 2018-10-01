import { TestingMethods } from './testing-methods';

describe('testing-methods', () => {
  it('should build', () => {
    expect(new TestingMethods()).toBeTruthy();
  });

  it('should be able to increment counter', async () => {
    const el = new TestingMethods();

    expect(el.counter).toBe(0);

    el.incrementCount();

    expect(el.counter).toBe(1);
  });
});
