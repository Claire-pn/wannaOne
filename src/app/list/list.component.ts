import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Elements} from '../Data/data';
import { UserDataServiceService } from '../user-data-service.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  headElements = ['Id' ,'Name' , 'User Name' , 'Email' , 'Update','Remove','Show'];
  @Input() input:Array<Elements>
  @Output() deleteEvent= new EventEmitter();
  @Output() editEvent= new EventEmitter();
 
  public apiUrl =" https://jsonplaceholder.typicode.com/users"

  dataList:Elements[]

  constructor(
    private userDataService:UserDataServiceService
    ) { }


  ngOnInit() {
    
  }

  atEdit(value){
    this.editEvent.emit(value)
  }
  atDelete(id){
    this.userDataService.deleteData(id).subscribe((dele)=>this.input.splice(id,1))
  }  

  
}
