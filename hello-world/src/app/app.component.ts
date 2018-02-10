import {
	FavoriteChangedEventArgs
} from './favorite.favorite.component';
import {
	Component
} from '@angular/core';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
});


export class AppComponent {
  
  task = {
    title: 'Review applications',
    assignee: {
      null
    }
    
  }
  
  canSave = true;
  
	post = {
		title: "Angular app",
		isFavorite: true
	}
	courses;

	loadCourses() {
		this.courses = [{
			id: 1,
			name: 'course1'
		}, {
			id: 2,
			name: 'course2'
		}, {
			id: 3,
			name: 'course3'
		}];
	}

	viewMode = 'map';

	onFavoriteChange(eventArgs: {
		EventArgs: FavoriteChangedEventArgs
	}) {
		console.log("Favorite changed", eventArgs);
	}


  onAdd() {
    this.courses.push({
      id: 4,
      name: 'course4'
    });
  }
  
  onRemove() {
    this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  
  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}