import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'using-snapshots'
})
export class UsingSnapshots {
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
