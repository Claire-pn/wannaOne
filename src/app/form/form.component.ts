import { Component, OnInit } from '@angular/core';
import {Elements} from '../Data/data'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public firstname:string;
  public lastname:string;
  public emailni :string;
  public gender:string;
  public favframe:string;

  public member:Elements[]=[]
  public data:any

  public registration_form:boolean=true;
  public list:boolean=false;

  //boolean variable for edit, default false;
  //index number to edit
  public index_to_edit:boolean=false;
  public index:Number = 0

  constructor() { }



  ngOnInit() {
  }

  onSubmit(){
     if (this.index_to_edit) { 
       var index = this.index
       this.member[Number(index)].firstname = this.data.firstname
       this.member[Number(index)].lastname = this.data.lastname
       this.member[Number(index)].emailni = this.data.emailni
       this.member[Number(index)].gender = this.data.gender
       this.member[Number(index)].favframe = this.data.favframe
      }else{
        this.data = new Elements;
        this.data.firstname = this.firstname
        this.data.lastname = this.lastname
        this.data.emailni = this.emailni
        this.data.gender = this.gender
        this.data.favframe = this.favframe
        this.member.push(this.data)
        alert("Welcome to the squad " + this.firstname)
        this.registration_form = false;
        this.list = true;
  }
}

  update(show:boolean[],index:Number){
    this.registration_form = show[0];
    this.list = show[1];
    this.index = index;
    //index value will be in here
  }

}
