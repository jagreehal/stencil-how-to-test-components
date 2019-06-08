import { Component, h, State, Method } from '@stencil/core';

@Component({
  tag: 'testing-methods',
  shadow: true
})
export class TestingMethods {

  constructor() {
    this.incrementCount = this.incrementCount.bind(this);
  }

  @State() counter: number = 0;

  @Method()
  async incrementCount() {
    this.counter++;
  }


  render() {
    return (
      <div>
        {this.counter}
      </div>
    );
  }
}
