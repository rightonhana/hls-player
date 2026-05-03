
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-spinner',
	imports: [],
	templateUrl: './spinner.component.html',
})
export class SpinnerComponent {
	@Input() loading = false;
}
