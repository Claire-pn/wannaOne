import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDataServiceService } from '../user-data-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  userId:number;
  userInfo:Array<any>=[]

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private userDataService:UserDataServiceService

  ) { }

  ngOnInit() {
    this.userId=this.route.snapshot.params['id']

    this.userDataService.viewData(this.userId).subscribe(posts=>{
      this.userInfo.push(posts)

      console.log(posts)
    });
  }

  backHome(){
    this.router.navigate(['/'])
  }

}
