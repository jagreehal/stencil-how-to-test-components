import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'testing-updates-aria-property',
  shadow: true
})
export class TestingUpdatesAriaProperty {
  @State() isHidden: boolean = true;

  handleToggle = () => {
    this.isHidden = !this.isHidden;
  }

  render() {
    return (
      <div>
        <a data-test="toggle" href="#" onClick={this.handleToggle} title="Toggle nenu">{this.isHidden ? 'Show' : 'Hide'}</a>
        <div id="content" aria-hidden={this.isHidden ? 'true' : 'false'}>
          content
        </div>
      </div>
    );
  }
}
