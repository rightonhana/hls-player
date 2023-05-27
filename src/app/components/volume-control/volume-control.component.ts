import { Component, OnInit } from '@angular/core';
import { VolumeService } from 'src/app/services/volume/volume.service';
import { MatSliderChange } from '@angular/material/slider';

@Component({
	selector: 'app-volume-control',
	templateUrl: './volume-control.component.html',
	styleUrls: ['./volume-control.component.scss'],
})
export class VolumeControlComponent implements OnInit {
	iconVolumeMute = { name: 'Mute', value: 'volume_off' };
	iconVolumeUp = { name: 'Unmute', value: 'volume_up' };
	label = 'Video progress';
	maxVolumeValue = 1;
	volume = 1;
	private savedVolume = 1;

	constructor(private volumeService: VolumeService) {}

	ngOnInit() {
		this.volumeService.volumeValue$.subscribe(
			(volume) => (this.volume = volume)
		);
	}

	onVolumeClick() {
		this.savedVolume = this.volume === 0 ? this.savedVolume : this.volume;
		this.volumeService.setVolumeValue(this.volume > 0 ? 0 : this.savedVolume);
	}

	onInput(event: MatSliderChange) {
		this.volumeService.setVolumeValue(event?.value ?? 0);
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
