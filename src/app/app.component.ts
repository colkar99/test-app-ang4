import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees=[
			{name : 'Karthik',
			dob : '21-2-1992',
			age: 25,
			place : 'trichy'
			},
			{name : 'lalitha',
			dob : '27-6-1991',
			age: 26,
			place : 'musiri'
			},
			{name : 'senthil',
			dob : '27-6-1990',
			age: 27,
			place : 'dubai'
			}   
  ];
  averageAge(){
  let sum = 0;
  	for (let emp of this.employees){
  		sum += emp.age ;
  	}
  	return sum;
  }
}
