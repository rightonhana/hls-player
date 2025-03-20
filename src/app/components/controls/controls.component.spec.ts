import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsComponent } from './controls.component';

describe('ControlsComponent', () => {
	let component: ControlsComponent;
	let fixture: ComponentFixture<ControlsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ControlsComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(ControlsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
