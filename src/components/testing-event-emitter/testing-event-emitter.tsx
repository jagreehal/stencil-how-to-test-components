import { Component, h, Event, EventEmitter } from '@stencil/core';

export interface SomethingHappened {
  message: string;
}

@Component({
  tag: 'testing-event-emitter'
})
export class TestingEventEmitter {
  /**
   * Emits message for SomethingHappened
   */
  @Event() somethingHappened: EventEmitter<SomethingHappened>;

  private handleClick = () => {
    this.somethingHappened.emit({ message: 'clicked!' });
  };

  render() {
    return <button onClick={this.handleClick}>Click Me!</button>;
  }
}
