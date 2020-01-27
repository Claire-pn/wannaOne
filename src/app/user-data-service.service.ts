import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Elements} from '../app/Data/data';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {
  private apiUrl =" https://jsonplaceholder.typicode.com/users"
 

  dataString: string;

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<Elements[]>(this.apiUrl);
  }
  postData(params :Elements[]):Observable<Elements[]>{
    return this.http.post<Elements[]>(this.apiUrl,params)
  }
  deleteData(id){
    return this.http.delete(this.apiUrl + "/:" ,id)
  }
  putData(user: Elements , id:any){
    return this.http.put(this.apiUrl + "/"+ id, user)
  }
  viewData(id){
    return this.http.get<Elements[]>(this.apiUrl+"/"+ id);
  }
 
}