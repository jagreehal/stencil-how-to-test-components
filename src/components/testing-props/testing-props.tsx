import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'testing-props'
})
export class TestingProps {
  /**
   * the first name
   */
  @Prop() first: string;
  /**
   * the name name
   */
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, my name is {this.first} {this.last}
      </div>
    );
  }
}
