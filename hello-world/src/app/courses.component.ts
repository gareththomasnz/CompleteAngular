import {
	CoursesService
} from './courses.service';
import {
	Component
} from '@angular/core';

export class CoursesService {
	getCourses() {
		return ["Course1", "Course2", "Course3"];
	}
}

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
          </div>
          `
})

export class CoursesComponent {
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

	constructor() {
		let service = new CoursesService();
		console.log("service:" + service.getCourses())
		this.courses = service.getCourses();
	}
}