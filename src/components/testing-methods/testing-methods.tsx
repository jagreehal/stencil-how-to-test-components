import { Component, h, State, Method } from '@stencil/core';

@Component({
  tag: 'testing-methods',
  shadow: true
})
export class TestingMethods {
  @State() counter: number = 0;

  /**
   * increments the counter by 1
   */
  @Method()
  async incrementCount() {
    return this.counter++;
  }

  render() {
    return <div>{this.counter}</div>;
  }
}
