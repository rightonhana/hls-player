import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-progress-bar',
	imports: [CommonModule],
	templateUrl: './progress-bar.component.html',
})
export class ProgressBarComponent {
	@Input() label = "";
	@Input() max = 0;
	@Input() smallSize = false;
	@Input() value = 0;
	@Output() input = new EventEmitter<Event>();
	@Output() change = new EventEmitter<Event>();

	get progress() {
		return this.max > 0 ? (this.value * 100) / this.max : 0;
	}

	inputHandler(event: Event) {
		this.input.emit(event);
	}

	changeHandler(event: Event) {
		this.change.emit(event);
	}
}
