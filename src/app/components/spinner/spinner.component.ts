import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-spinner',
	imports: [CommonModule],
	templateUrl: './spinner.component.html',
})
export class SpinnerComponent {
	@Input() loading = false;
}
