import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'testing-props-shadow',
  shadow: true
})
export class TestingPropsShadow {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, my name is {this.first} {this.last}
      </div>
    );
  }
}
