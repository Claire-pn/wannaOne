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
  public preName: string


  public member:any[]=[]
  public onEdit: boolean = false




 

  constructor() { }



  ngOnInit() {
  }

  onSubmit(){
    if (this.onEdit == false) {
      var data = {
    
        firstname :this.firstname,
        lastname : this.lastname,
        emailni :this.emailni,
        gender :this.gender,
        favframe : this.favframe
  }
  this.member.push(data)
  this.firstname = this.lastname = this.emailni = this.gender = this.favframe = null
}else{
  for(let i=0 ; i<this.member.length ; i++){
    if(this.member[i].firstname == this.preName){
      var data = {
        firstname:this.firstname,
        lastname:this.lastname,
        emailni:this.emailni,
        gender:this.gender,
        favframe:this.favframe
      }
      this.member[this.member.indexOf(this.member[i])]=data;
      this.onEdit=false;
      break;
    }
  }
}
  }

onEvent(data){
  this.preName = data.firstname
  this.firstname= data.firstname
  this.lastname=data.lastname
  this.emailni= data.emailni
  this.gender=data.gender
  this.favframe=data.favframe
  this.onEdit=true
}

}

