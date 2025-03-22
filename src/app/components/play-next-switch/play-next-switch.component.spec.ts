import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayNextSwitchComponent } from './play-next-switch.component';

describe('PlayNextSwitchComponent', () => {
	let component: PlayNextSwitchComponent;
	let fixture: ComponentFixture<PlayNextSwitchComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PlayNextSwitchComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(PlayNextSwitchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
