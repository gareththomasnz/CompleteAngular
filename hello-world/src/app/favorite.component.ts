import {Component, onInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'favorite',
    templateUrl: './favorite.component.html',
    styleUrls: './favorite.component.css'
    encapsulation: ViewEncapsulation.None;
  })

export interface FavoriteChangedEventArgs{
  newValue: boolean
}

export class FavoriteComponent implements OnInit {
@Input('is-favorite') isFavorite: boolean;
@Output('change') click = new eventEmitter();

  constructor() {}
  
  ngOnInit(){
    
  }
  
  onClick(){
    this.isSelected = !this.isSelected;
    this.change.emit({newValue: this.isSelected});
  }
}

