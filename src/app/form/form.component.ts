import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    alert("Welcome to the squad " + this.firstname)
  }

}
