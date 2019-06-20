import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlsComponent } from './components/controls/controls.component';
import { VideoWrapperComponent } from './components/video-wrapper/video-wrapper.component';
import { ControlComponent } from './components/control/control.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ControlVolumeComponent } from './components/control-volume/control-volume.component';
import { TimeComponent } from './components/time/time.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import {
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatSliderModule,
  MatListModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    VideoWrapperComponent,
    ControlComponent,
    ProgressBarComponent,
    ControlVolumeComponent,
    TimeComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
