import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  //get
  url='http://api.qshore.com/users';

  listUsers(){
    
    return this.http.get(this.url)
  }
  
  deleteUser(id){
    // let url ="http://api.qshore.com/delete-user/" + id
    return this.http.delete(this.url+"/delete-user/"+id)
  }
  viewUser(id){
    // let url="http://api.qshore.com/view-user/" + id;
    return this.http.get(this.url+"/view-user/" + id)
  }

}
