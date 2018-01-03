import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output
} from "@angular/core";

@Component({
  selector: "wm-hello-button",
  templateUrl: "hello-button.component.html",
  styleUrls: ["hello-button.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloButtonComponent {
  @Input() name;
  @Output() click: EventEmitter<any> = new EventEmitter();

  onClick(e) {
    this.click.emit(e);
  }
}
