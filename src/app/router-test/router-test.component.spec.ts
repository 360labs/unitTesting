import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule }				from '@angular/router/testing';

import { RouterTestComponent }				from './router-test.component';


describe('RouterTestComponent', () => {
	let component: RouterTestComponent;
	let fixture: ComponentFixture<RouterTestComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RouterTestComponent ],
			imports: [RouterTestingModule.withRoutes([])]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RouterTestComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
