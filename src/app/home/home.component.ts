import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	constructor(private http: HttpClient) {}

	ngOnInit() {
		// this.getIMDBData();
	}

	public executeSelectedChange = (event) => {
		console.log(event);
	};

	// getIMDBData() {
	// 	return this.http.get<any>('http://www.omdbapi.com/?i=tt3896198&apikey=c33e2431').subscribe(
	// 		(response) => {
	// 			console.log(response);
	// 		},
	// 		(error) => {
	// 			alert('Error Found!');
	// 		}
	// 	);
	// }
}
