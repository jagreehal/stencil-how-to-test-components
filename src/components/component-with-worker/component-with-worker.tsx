import { Component, State, h } from '@stencil/core';
import { countDown } from './countdown.worker';

@Component({
  tag: 'component-with-worker',
})
export class ComponentWithWorker {
  @State() progress = 0;
  @State() status: 'NOT STARTED' | 'WORKING' | 'DONE' = 'NOT STARTED';

  private startCountdown = () => {
    const startNum = 5;

    countDown(startNum, (p) => {
      this.progress = p;
      this.status = 'WORKING';
    }).then((_) => {
      this.status = 'DONE';
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.startCountdown}>Start</button>
        <p>
          Progress - {this.progress}, Status - {this.status}
        </p>
      </div>
    );
  }
}
