import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Elements} from '../Data/data'



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  headElements = ['Id' ,'First Name' , 'Last Name' , 'Email' , 'Gender' , 'Favorite Framework' , 'Update'];
  @Input() input:Array<Elements>
  @Output() editEvent= new EventEmitter();
  public index :number


  constructor() {
    
   }

  ngOnInit() {
  }

  onEdit(value){
    this.editEvent.emit(value)
    this.index = this.input.indexOf(value)
    this.input.splice(this.index)
  }
  
}
