import { Component, h, State } from '@stencil/core';

interface Day {
  label: string;
  selected: boolean
}

@Component({
  tag: 'testing-render'
})
export class TestingRender {
  @State() days: Day[] = [
    { label: 'Su', selected: false },
    { label: 'M', selected: false },
    { label: 'Tu', selected: false },
    { label: 'W', selected: false },
    { label: 'Th', selected: false },
    { label: 'F', selected: false },
    { label: 'Sa', selected: false }
  ];

  handleDayClicked = (day: Day) => {
    day.selected = !day.selected;
    this.days = [... this.days, day];
  }

  render() {
    return (
      <div>
        <label>What days would you like notifications?</label>
        <div>
          {this.days.map(day =>
            <div class={`day ${day.selected ? 'day-selected' : ''}`} data-test="day" onClick={() => this.handleDayClicked(day)}>{day.label}</div>
          )}
        </div>
      </div>
    );
  }
}
