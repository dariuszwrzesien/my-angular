import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { Permission } from "./auth.model";
import { AuthService } from "./auth.service";

@Directive({
  selector: "[appAuth]",
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: "appAuth" });
  private authService = inject(AuthService);

  private templateRef = inject(TemplateRef); //daje dostęp do tego co wewnątrz <ng-template>
  private viewContainer = inject(ViewContainerRef); //daje dostep do Miejsca w którym jest wstawiany element <ng-content>

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    }); // This is a side effect, it is run when sth is changed
  }
}
