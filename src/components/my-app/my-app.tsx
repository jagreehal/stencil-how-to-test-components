import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss',
  shadow: true
})
export class MyApp {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    if (this.first && this.last) {
      return (
        <div>
          <span class="welcome">Hello</span>, my name is {this.first}{' '}
          {this.last}
        </div>
      );
    }
  }
}
