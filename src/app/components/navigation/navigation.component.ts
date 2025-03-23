import { Component } from '@angular/core';
import { ThemeSwitchComponent } from "../theme-switch/theme-switch.component";

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	imports: [ThemeSwitchComponent],
})
export class NavigationComponent { }
