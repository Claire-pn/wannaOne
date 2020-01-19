import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  headElements = ['First Name', 'Last Name', 'Email','Gender','Favorite Framework','Update'];
  @Input() data:object
  @Input() member:any[]=[]
  @Output() editEvent= new EventEmitter();


  constructor() {
    
   }

  ngOnInit() {
  }

  onEdit(el){
   
    
    this.editEvent.emit(el);
    console.log(el)
  }
  
 
}
