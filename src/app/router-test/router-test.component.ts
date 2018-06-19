import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-router-test',
	templateUrl: './router-test.component.html',
	styleUrls: ['./router-test.component.css']
})
export class RouterTestComponent implements OnInit {

  constructor(public route:ActivatedRoute, public router:Router) { }

  ngOnInit() {
  }

}
