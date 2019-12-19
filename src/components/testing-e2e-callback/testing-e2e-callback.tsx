import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'callback-test',
  shadow: true
})
export class CallbackTest {
  /**
   * callback function button click
   */
  @Prop() clickProp: Function | undefined;

  private clickHandler = () => {
    if (typeof this.clickProp === 'function') {
      console.log(
        'do something interesting before invoking the callback',
        this.clickProp
      );

      this.clickProp();
    }
  };

  render() {
    return (
      <button class="button" onClick={() => this.clickHandler()}>
        Button
      </button>
    );
  }
}
