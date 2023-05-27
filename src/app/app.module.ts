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
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';

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
