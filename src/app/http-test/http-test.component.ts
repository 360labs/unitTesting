import { Component, OnInit } from '@angular/core';

import { ApiService }		from '../api.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
	products = [];

	constructor(private api:ApiService) {
		this.loadProducts();
	}

	ngOnInit() {}

	loadProducts() {
		return this.api.getProducts().then(products => {
			this.products = products;
			return products;
		});
	}

}
