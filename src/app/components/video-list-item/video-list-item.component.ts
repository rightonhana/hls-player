import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlComponent } from '../control/control.component';

@Component({
	selector: 'app-video-list-item',
	imports: [ControlComponent, CommonModule],
	templateUrl: './video-list-item.component.html',
})
export class VideoListItemComponent {
	@Input() video = { title: "", description: "", thumbnail: "", selected: false };
	@Output() videoSelected = new EventEmitter();

	emitVideoSelected() {
		this.videoSelected.emit();
	}

	get shortVideoDescription() {
		return this.video.description.length > 30 ? `${this.video.description.substring(0, 30)}...` : this.video.description
	}
}
