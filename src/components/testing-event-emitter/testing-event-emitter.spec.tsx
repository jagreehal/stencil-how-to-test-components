import { TestingEventEmitter } from './testing-event-emitter';

describe('testing-event-emitter', () => {
  it('should build', () => {
    expect(new TestingEventEmitter()).toBeTruthy();
  });
});
