import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { MatSliderChange } from '@angular/material';
import { VolumeService } from 'src/app/services/volume.service';

@Component({
  selector: 'app-control-volume',
  templateUrl: './control-volume.component.html',
  styleUrls: ['./control-volume.component.scss']
})
export class ControlVolumeComponent implements OnInit {
  public volume = 1;
  public maxVolumeValue = 1;
  public iconVolumeUp = {
    name: 'Unmute',
    value: 'volume_up'
  };
  public iconVolumeMute = {
    name: 'Mute',
    value: 'volume_off'
  };
  private savedVolume = 1;

  constructor(private volumeService: VolumeService) {}

  public ngOnInit() {
    this.volumeService.volumeValue$.subscribe(volume => this.volume = volume);
  }

  public onVolumeClick() {
    this.savedVolume = this.volume === 0 ? this.savedVolume : this.volume;
    this.volumeService.setVolumeValue(this.volume > 0 ? 0 : this.savedVolume);
  }

  public onInput(event: MatSliderChange) {
    this.volumeService.setVolumeValue(event.value);
  }

  public get icon() {
    return this.volume === 0 ? this.iconVolumeMute.value : this.iconVolumeUp.value;
  }

  public get title() {
    return this.volume === 0 ? this.iconVolumeMute.name : this.iconVolumeUp.name;
  }
}
