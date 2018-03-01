export class TestingMethods {
    constructor() {
        this.counter = 0;
        this.incrementCount = this.incrementCount.bind(this);
    }
    incrementCount() {
        this.counter++;
    }
    render() {
        return (h("div", null, this.counter));
    }
    static get is() { return "testing-methods"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "counter": { "state": true }, "incrementCount": { "method": true } }; }
}
