import { Component } from "@angular/core";
import { CsCloseDialogDirective } from "../../directives/close-dialog.directive";


@Component({
    selector: 'cs-dialog',
    template: `
        <div class="dialog">
            <h3>Title of the COMPONENT</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, tempore ad consequuntur modi aspernatur facere totam in possimus sit impedit dicta illo vero dolore earum iusto? Optio mollitia commodi sit!</p>
            <button csCloseDialog>Close</button>
        </div>
    `,
    styleUrl: './dialog.component.scss',
    imports: [CsCloseDialogDirective]
})
export class CsDialogComponent {}