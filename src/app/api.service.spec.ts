import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

describe('ApiService', () => {
	let service: ApiService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ApiService],
			imports: [HttpClientModule]
		});
		service = TestBed.get(ApiService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('#getProducts() should return a Promise of an array of objects', done => {
		service.getProducts().then(products => {
			expect(products.length).toBeGreaterThan(0);
			done();
		});
	});
});
