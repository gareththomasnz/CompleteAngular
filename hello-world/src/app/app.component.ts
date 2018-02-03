import { FavoriteChangedEventArgs } from './favorite.favorite.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  post = {
    title:"Angular app",
    isFavorite: true
  }
  courses = [1, 2];

  onFavoriteChange(eventArgs: {EventArgs: FavoriteChangedEventArgs}){
    console.log("Favorite changed", eventArgs);
  }
}
