import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-play-next-switch',
	templateUrl: './play-next-switch.component.html',
})
export class PlayNextSwitchComponent {
	@Output() toggle = new EventEmitter();

	emitOnChange(event: Event) {
		this.toggle.emit(event)
	}
}
