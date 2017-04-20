import Component, { tracked } from "@glimmer/component";

export default class GlimmerDeployTest extends Component {
    title: string = "This is a top level component";

    @tracked
    state: string = "ENTER VALUE ...";

    passTextToSubComp(e: Event): void {
        let text: string = this.getText(e);
        this.state = text;
    }

    getText(e: Event): string {
        let el: HTMLInputElement = e.target as any;
        return el.value;
    }
}
