import { Component } from '@angular/core';

@Component({
	selector: 'app-theme-switch',
	templateUrl: './theme-switch.component.html',
})
export class ThemeSwitchComponent {
	handleThemeSwitch() {
		localStorage.setItem(
			"theme",
			document.documentElement.classList.toggle("dark") ?
				"dark"
				: "light",
		);
	}
}
