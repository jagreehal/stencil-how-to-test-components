import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'testing-props',
  shadow: true
})
export class TestingProps {
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
