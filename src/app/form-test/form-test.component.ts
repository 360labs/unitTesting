import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
	a = 12;
	b = 4;

	constructor() { }

	ngOnInit() {
	}

}