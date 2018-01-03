import { HelloButtonComponent } from "./hello-button.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [HelloButtonComponent],
  exports: [HelloButtonComponent]
})
export class HelloButtonModule {}
