import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'using-snapshots'
})
export class UsingSnapshots {
  /**
   * the first name
   */
  @Prop() first: string;

  /**
   * the last name
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
