import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  id = 1
  public firstname:string;
  public lastname:string;
  public emailni :string;
  public gender:string;
  public favframe:string;

  info :any
  memberList:any[]=[]
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
   
    this.info = {
      firstname :this.firstname,
      lastname : this.lastname,
      emailni:this.emailni,
      gender:this.gender,
      favframe:this.favframe,
    }
    alert("Successfully Added")
 
    this.memberList.push(this.info)
    console.log(this.memberList)
  }

  onList(value){
    // this.isShow=false
    this.firstname = value.firstname,
    this.lastname = value.lastname,
    this.emailni = value.emailni,
    this.gender = value.gender,
    this.favframe= value.favframe,
   
   

    this.memberList= this.memberList.filter(infos => {
      if(infos != value){
        return infos 
      }
    })
   
}
}




