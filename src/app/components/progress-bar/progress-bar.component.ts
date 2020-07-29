import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() public readonly max: number;
  @Input() public readonly value: number;
  @Input() public readonly label: string;
  @Output() public readonly input = new EventEmitter<MatSliderChange>();
  @Output() public readonly change = new EventEmitter<MatSliderChange>();

  public inputHandler(event: MatSliderChange) {
    this.input.emit(event);
  }

  public changeHandler(event: MatSliderChange) {
    this.change.emit(event);
  }
}
