import { Directive, inject } from "@angular/core";
import { CsDialogService } from "../services/dialog.service";

@Directive({
    selector: '[csCloseDialog]',
    exportAs: 'csCloseDialog',
    host: {
        '(click)': 'closeDialog()'
    }
})
export class CsCloseDialogDirective {

    private _dialogRef = inject(CsDialogService, {optional: true});

    closeDialog() {
        if(!this._dialogRef) return;
        this._dialogRef.closeDialog();
    }
}