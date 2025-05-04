import { Component, inject, TemplateRef, viewChild, ViewContainerRef } from "@angular/core";
import { CsDialogService } from "./services/dialog.service";
import { CsDialogComponent } from "./components/dialog/dialog.component";
import { CsCloseDialogDirective } from "./directives/close-dialog.directive";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CsCloseDialogDirective]
})
export class AppComponent {

  dialogService = inject(CsDialogService);

  template = viewChild(TemplateRef);

  viewContainerRef = viewChild('template', {read: ViewContainerRef});

  openDialog() {
    this.dialogService.openDialog(this.template()!, this.viewContainerRef()!);
  }

  openDialogComponent() {
    this.dialogService.openDialog(CsDialogComponent);
  }

}
