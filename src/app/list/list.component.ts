import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Elements} from '../Data/data'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  headElements = ['First Name', 'Last Name', 'Email','Gender','Favorite Framework','Update'];
  @Input() input:Array<Elements>;

  @Output() outputEvent= new EventEmitter();
  @Output() editEvent= new EventEmitter();

  index:number
  constructor() {
    
   }

  ngOnInit() {
  }

  onEdit(el){
    
    this.outputEvent.emit([true,false]);
    
    this.editEvent.emit(el);
    this.index= this.input.indexOf(el);
    this.input.splice(this.index)
  }
  
 
}
