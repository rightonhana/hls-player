import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatLegacySliderChange as MatSliderChange } from '@angular/material/legacy-slider';

@Component({
	selector: 'app-progress-bar',
	templateUrl: './progress-bar.component.html',
	styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
	@Input() max = 0;
	@Input() value = 0;
	@Input() label = "";
	@Output() input = new EventEmitter<MatSliderChange>();
	@Output() change = new EventEmitter<MatSliderChange>();

	inputHandler(event: MatSliderChange) {
		this.input.emit(event);
	}

	changeHandler(event: MatSliderChange) {
		this.change.emit(event);
	}
}
