import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(private http:HttpClient) { }

	getProducts():Promise<any[]> {
		return Promise.resolve([1,2,3]);	// Fake the API call
		// return <Promise<any[]>>this.http.post('/api/product/search', {size:10}).toPromise().then((r:any) => r.items);
	}

}
