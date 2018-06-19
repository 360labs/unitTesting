import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestComponent } from './http-test.component';
import { ApiService }		from '../api.service';

describe('HttpTestComponent', () => {
	let component: HttpTestComponent;
	let fixture: ComponentFixture<HttpTestComponent>;

	let apiServiceStub:Partial<ApiService> = {
		getProducts: () => Promise.resolve(['one','two','three'])
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ HttpTestComponent ],
			providers: [{provide:ApiService, useValue:apiServiceStub}],
			imports: [HttpClientModule]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HttpTestComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('#loadProducts() should load products', done => {
		component.loadProducts().then(products => {
			expect(products.length).toBeGreaterThan(0);
			done();
		});
	});


});
