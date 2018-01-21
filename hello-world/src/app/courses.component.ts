import {CoursesService} from './courses.service';
import {Component } from '@angular/core';

export class CoursesService{
    getCourses(){
        return ["Course1","Course2","Course3"];
    }
}

@Component({
    selector: 'courses',
    template: `
          <h2>{{Title}}</h2>
          <li *ngFor="let course of courses">
            {{ course }}
          </li>
          `
})

export class CoursesComponent{
    title = "List of courses";
    courses;

    // getTitle(){
    //     return this.title;
    // }

    constructor(){
        let service = new CoursesService();
        console.log("service:"+service.getCourses())
        this.courses = service.getCourses();
    }
}

