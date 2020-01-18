import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Elements} from '../Data/data'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  headElements = ['First Name', 'Last Name', 'Email','Gender','Favorite Framework','Update'];
  @Input() input:Elements;

  @Output() outputEvent= new EventEmitter();
  @Output() editEvent= new EventEmitter();

  constructor() {
    
   }

  ngOnInit() {
  }

  onEdit(index_to_edit:Number){
    this.outputEvent.emit([true,false]);
    this.editEvent.emit(index_to_edit)
  }
  
 
}
