import { Component } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoContentComponent } from './components/video-content/video-content.component';
import { VideoListComponent } from './components/video-list/video-list.component';

@Component({
	selector: 'app-root',
	imports: [NavigationComponent, FooterComponent, VideoContentComponent, VideoListComponent],
	templateUrl: './app.component.html',
})
export class AppComponent { }
