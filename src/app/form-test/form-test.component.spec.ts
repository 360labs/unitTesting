import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FormTestComponent } from './form-test.component';

describe('FormTestComponent', () => {
	let component: FormTestComponent;
	let fixture: ComponentFixture<FormTestComponent>;
	let hostElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ FormTestComponent ],
			imports: [FormsModule]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FormTestComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		hostElement = fixture.debugElement.nativeElement;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('a and b should default to 0', () => {
		expect(component.a).toBe(12);
		expect(component.b).toBe(4);
	});

	it('span.answer should contain 16', () => {
		expect(hostElement.querySelector('.answer').textContent).toContain('16');
	});

	it('a=55, b=12, span.answer should contain 67', () => {
		component.a = 55;
		component.b = 12;
		fixture.detectChanges();
		expect(hostElement.querySelector('.answer').textContent).toContain('67');
	});

	it('set a=100, b=1 using the DOM, span.answer should contain 100', () => {
		var aEl = hostElement.querySelector('.num.a');
		var bEl = hostElement.querySelector('.num.b');
		aEl.value = 99;
		bEl.value = 1;
		aEl.dispatchEvent(new Event('input'));
		bEl.dispatchEvent(new Event('input'));
		fixture.detectChanges();
		expect(hostElement.querySelector('.answer').textContent).toContain('100');
	});
});
