import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "callback-test",
  shadow: true
})
export class CallbackTest {
  constructor() {
    this.clickHandler = this.clickHandler.bind(this);
  }

  @Prop() clickProp: Function | undefined;

  clickHandler = () => {
    if (typeof this.clickProp === "function") {
      console.log(
        "do something interesting before invoking the callback",
        this.clickProp
      );

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
