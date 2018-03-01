export class TestingEventEmitter {
    constructor() {
        this.handleClick = () => {
            this.somethingHappened.emit({ message: 'clicked!' });
        };
    }
    render() {
        return h("button", { onClick: this.handleClick }, "Click Me!");
    }
    static get is() { return "testing-event-emitter"; }
    static get events() { return [{ "name": "somethingHappened", "method": "somethingHappened", "bubbles": true, "cancelable": true, "composed": true }]; }
}
