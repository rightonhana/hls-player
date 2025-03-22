import { Component } from '@angular/core';
import { VolumeService } from '../../services/volume/volume.service';
import { ControlComponent } from '../control/control.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
	selector: 'app-volume-control',
	imports: [ControlComponent, ProgressBarComponent],
	templateUrl: './volume-control.component.html'
})
export class VolumeControlComponent {
	iconVolumeMute = { name: 'Unmute', value: 'volume_off' };
	iconVolumeUp = { name: 'Mute', value: 'volume_up' };
	label = 'Volume level';
	maxVolumeValue = 100;
	volume = 100;
	private savedVolume = 100;

	constructor(private volumeService: VolumeService) { }

	ngOnInit() {
		this.volumeService.volumeValue$.subscribe(
			(volume) => (this.volume = volume)
		);
	}

	onVolumeClick() {
		this.savedVolume = this.volume === 0 ? this.savedVolume : this.volume;
		this.volumeService.setVolumeValue(this.volume > 0 ? 0 : this.savedVolume);
	}

	onInput(event: Event) {
		this.volumeService.setVolumeValue((event?.target as HTMLInputElement)?.valueAsNumber ?? 0);
	}

	get icon() {
		return this.volume === 0
			? this.iconVolumeMute.value
			: this.iconVolumeUp.value;
	}

	get title() {
		return this.volume === 0
			? this.iconVolumeMute.name
			: this.iconVolumeUp.name;
	}

	get ariaLabel() {
		return this.label;
	}
}
