export class MyApp {
    render() {
        if (this.first && this.last) {
            return (h("div", null,
                h("span", { class: "welcome" }, "Hello"),
                ", my name is ",
                this.first,
                ' ',
                this.last));
        }
    }
    static get is() { return "my-app"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "first": { "type": String, "attr": "first" }, "last": { "type": String, "attr": "last" } }; }
    static get style() { return "/**style-placeholder:my-app:**/"; }
}
