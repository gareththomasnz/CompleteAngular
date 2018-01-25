import {
	CoursesService
} from './courses.service';
import {
	Component
} from '@angular/core';



@Component({
	selector: 'courses',
	template: `
          <h2>{{Title}}</h2>
          <li *ngFor="let course of courses">
            {{ course }}
          </li>
          <div (click)="onDivClicked()">
            <button type="button" class="btn btn-primary btn-sm" [class.active]="isActive"
              (click)="onSave($event)">
              Save
            </button>
           
            <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/><br/>
           <div class="panel panel-default">
            <div class="panel-body">
              {{course.title | uppercase | lowercase}} <br/>
              {{course.rating | number}} <br/>
              {{course.students | number: '2.1-1'}} <br/>
              {{course.price | currency:'AUD':true:'3.2-2'}} <br/>
              {{course.releaseDate | date:shortDate}} <br/>
            </div>
          </div>
          </div>
          `
})


//export class CoursesService {
//	getCourses() {
//		return ["Course1", "Course2", "Course3"];
//	}
//}


export class CoursesComponent {
  
  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }
  
   email = "Enter your email";
  
	title = "List of courses";
	courses;
  isActive = true;
	// getTitle(){
	//     return this.title;
	// }
  
  onDivClicked(){
     console.log("div was clicked");
  }
  
  onSave($event){
    $event.stopPropagation();
    
    console.log("button was clicked", $event);
  }
  
  onKeyUp(){
    console.log(this.email);
  }

	constructor() {
		let service = new CoursesService();
		console.log("service:" + service.getCourses())
		this.courses = service.getCourses();
	}
}
