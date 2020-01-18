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

 
 

  constructor() { }



  ngOnInit() {
  }

  onSubmit(){
 
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


  // update(show:boolean[]){
  //   this.registration_form = show[0];
  //   this.list = show[1];

    //index value will be in here
  // }

}
