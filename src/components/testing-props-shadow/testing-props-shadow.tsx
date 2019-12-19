import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'testing-props-shadow',
  shadow: true
})
export class TestingPropsShadow {
  /**
   * The first name
   */
  @Prop() first: string;
  /**
   * The last name
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
