import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent {
  @Input() public readonly icon: string;
  @Input() public readonly title: string;
}
