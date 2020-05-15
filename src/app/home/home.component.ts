import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService]
})
export class HomeComponent implements OnInit {
  deletedata: any;

  constructor(private serv:HomeService) { }
userlist:any;
userdata:any;


  ngOnInit() {
    this.listUsers()
  }
    listUsers(){
      //debugger;
      this.serv.listUsers().subscribe((res)=>{
        //alert(this.userlist)
        this.userlist=res
    })}
   // deleteuser(id){
     // this.serv.deletedata(id).subscribe((res)=>{
      //this.deletedata1=res;
      //alert(this.deletedata1.status + this.deletedata1.msg)
       //this.listUsers();
      //})
    //}
   deleteuser(id){
      this.serv.deleteUser(id).subscribe((res)=>{
        this.deletedata = res;
       //alert(this.deletedata.status + this.deletedata.msg)
        this.listUsers();
      })
    }
    viewuser(id){
      this.serv.viewUser(id).subscribe((res)=>{
        this.userdata = res;
       //alert(this.userdata.status + this.userdata.msg)
       // this.listUsers();
      })
    }
  }
