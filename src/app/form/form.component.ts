import { Component, OnInit } from '@angular/core';
import { UserDataServiceService } from '../user-data-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public fullname: string;
  public uname: string;
  public emailni: string;

  public editId: number;
  public editName: string;
  public editUname: string;
  public editEmailni: string;
  forEdit: any
  updates: any

  condition = false

  info: any
  memberList: any[] = []
  constructor(
    private userDataService: UserDataServiceService
  ) { }

  ngOnInit() {
    this.userDataService.getData().subscribe(Data => this.memberList = Data)
  }

  onSubmit() {

    this.info = {
      id: this.memberList.reduce((max, array) => (array.id > max ? array.id : max),
        this.memberList[0].id) + 1,
      name: this.fullname,
      username: this.uname,
      email: this.emailni,

    }
    alert("Successfully Added")
    this.userDataService.postData(this.memberList).subscribe(fmember => {
      console.log(this.info)
      return this.memberList.push(this.info)
    });
  }



  onEdit(value) {
    console.log(value.id)
    this.editId = value.id
    this.editName = value.name
    this.editUname = value.username
    this.editEmailni = value.email
    this.condition = true;
  }

  onUpdate() {
    this.condition = false;
    console.log("foredit here" + this.forEdit.name)
    for (var i in this.memberList) {
      if (this.memberList[i].id == this.forEdit.id) {

        this.updates = {
          id: this.editId,
          name: this.editName,
          username: this.editUname,
          email: this.editEmailni
        }
        this.userDataService.putData(this.updates, this.memberList[i].id).subscribe(datas =>
          this.memberList[i] = this.updates)
        break;
      }
    }
  }

}

















