import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ControlComponent } from './components/control/control.component';
import { ControlsComponent } from './components/controls/controls.component';
import { VolumeControlComponent } from './components/volume-control/volume-control.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { TimeComponent } from './components/time/time.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoWrapperComponent } from './components/video-wrapper/video-wrapper.component';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';

@NgModule({
	declarations: [
		AppComponent,
		ControlComponent,
		ControlsComponent,
		VolumeControlComponent,
		ProgressBarComponent,
		TimeComponent,
		VideoListComponent,
		VideoWrapperComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatProgressSpinnerModule,
		MatListModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
