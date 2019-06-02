import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'callback-test',
  shadow: true
})
export class CallbackTest {
  constructor() {
    this.clickHandler = this.clickHandler.bind(this);
  }

  @Prop()
  clickProp: undefined;

  clickHandler = () => {
    console.log('do something interesting before invoking the callback', this.clickProp);

    // Invoke the callback function
    if (this.clickProp !== undefined) {
      this.clickProp();
    }
  };

  render() {
    return (
      <button class="button" onClick={this.clickHandler}>
        Button
      </button>
    );
  }
}
